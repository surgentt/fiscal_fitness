$(document).ready(function(){

  // console.log(d3);

  // Prevent page from automatically reloading after submit
  $('#iRateForm').submit(function() {
    return false;
  });

	//Run Code on Click of id="how Much"
  $("#howMuch").click(function (ev) {
    ev.preventDefault();
    var numOfPeriods = 0;

    // Need to improve my emtpy code validations here

    //Validates for empty code only. 
    //Loop through all the required fields. If any are blank jump out
    //http://stackoverflow.com/questions/20082915/jquery-required-fields-loop-based-on-css-class
    // $('.required').each(function() {
    //   if($(this).val().length == 0) {
    //     $('.myModal').show();
    //     $('.modal_content').text('Please fill in the Required Fields');
    //     return false;
    //   } else {
        clearGraph();
        //Adjust the number of periods from years to month
        numOfPeriods = yearToMonthAdj();

        // Change function that is run, depending on what the body of the page is named
        if($('div.withoutInterest')[0]) {
          var futureValue = createiRateGraphNoInterest(numOfPeriods);
          testFVforMillionaire(futureValue);
        } else if ($('div.withInterest')[0]) {
          var futureValue = createiRateGraph(numOfPeriods);
          testFVforEarnings(futureValue);
        } else if ($('div.bothInterest')[0]) {
          var futureValue = createBoth(numOfPeriods);
          testExtraIncome(extraIncome);
        } else {
          var futureValue = createBoth(numOfPeriods);
        }
    //   }
    // });
  });

  function clearGraph() {
    $('#y_axis').empty();
    $('#x_axis').empty();
    $('#chart').empty();
  }

  function yearToMonthAdj() {
    var periods =  $('#numOfPeriods').val();
    return periods * 12;
  }

  function runFvNoInterest(numOfPeriods, pmt) {
		var futureValue       = 0;
    var futureValueString = "0";
    //When Initital Run, numOfPeriods is passed in. 
    futureValue = pmt*numOfPeriods;
  
    return futureValue;
  }

  function runFVOrdinaryAnnuity(numOfPeriods, pmt, interest) {
    var factor = 0;
    var futureValue = 0;
    var futureValueString = "0";
    
    //fv = pmt*[(((1+i)^n)-1/i)]
    factor = ((Math.pow((1+interest),numOfPeriods))-1)/interest;
    futureValue = pmt * factor;
    
    return futureValue;
  }

  function createiRateGraphNoInterest(numOfPeriods) {
    //Declare an empty array to pass data into
    var data = [];
    var futureValue = 0;
    var pmt = $('#pmt').val()
    for(var index = 0; index <= numOfPeriods; index++) {
      //Instead of passing in numOfPeriods, index is passed into runFvNoInterest)
      futureValue = runFvNoInterest(index, pmt);
      data.push({ x: index, y: futureValue});
    }
    console.log(data);
    // Create a new Rickshaw Graph
    var graph = new Rickshaw.Graph( {
      element: document.querySelector("#chart"), 
      //Automatically Scale to window size
      width: 500,
      height: 210,
      series: [{
        name:  'Total Savings',
        color: 'steelblue',
        data: data
      }]
    });

    var x_axis = new Rickshaw.Graph.Axis.X( { 
      graph: graph,
      element: document.getElementById('x_axis')
    });

    var y_axis = new Rickshaw.Graph.Axis.Y( {
      graph: graph,
      orientation: 'left',
      tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
      element: document.getElementById('y_axis'),
    });

    graph.render();

    futureValueString = "$" + futureValue.formatMoney(2);
    $('#total').val(futureValueString);

    return futureValue;
  }

  function createiRateGraph(numOfPeriods) {
    //Declare an empty array to pass data into
    var data = [];
    var interest = $('#interest').val()/100/12;
    var pmt = $('#pmt').val()

    //Declare a variable index; Pass in months; Increment by one month on each loop
    for(var index = 0; index <= numOfPeriods; index++) {
      //Instead of passing in numOfPeriods, index is passed into runFvNoInterest)
      futureValue = runFVOrdinaryAnnuity(index, pmt, interest);
      data.push({ x: index, y: futureValue });
    }
    console.log(data);
    // Create a new Rickshaw Graph
    var graph = new Rickshaw.Graph( {
      element: document.querySelector("#chart"), 
      //Automatically Scale to Window Size
      width: 500,
      height: 210,
      series: [{
        name: 'Savings with Interest',
        color: 'lightblue',
        data: data
      }]
    });

    var x_axis = new Rickshaw.Graph.Axis.X( { 
      graph: graph,
      element: document.getElementById('x_axis')
    });

    var y_axis = new Rickshaw.Graph.Axis.Y( {
      graph: graph,
      orientation: 'left',
      tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
      element: document.getElementById('y_axis'),
    });

    graph.render();

    futureValueString = "$" + futureValue.formatMoney(2);
    $('#total').val(futureValueString);

    return futureValue;
  }

  function createBoth(numOfPeriods) {
    var dataA = [];
    var dataB = [];

    var interest = $('#interest').val()/100/12;
    var pmt = $('#pmt').val()

    for(var index = 0; index <= numOfPeriods; index++) {
      futureValueA = runFvNoInterest(index, pmt);
      dataA.push({ x: index, y: futureValueA });

      futureValueB = runFVOrdinaryAnnuity(index, pmt, interest);
      dataB.push({ x: index, y: futureValueB });
    }

    console.log(dataA);
    console.log(dataB);
    // Create a new Rickshaw Graph
    var graph = new Rickshaw.Graph( {
      //Automatically Scale to Window Size
      width: 500,
      height: 210,
      element: document.querySelector("#chart"), 
      renderer: 'area',
      stroke: true,
      series: [ {
        name: "No Interest",
        data: dataA,
        color: 'steelblue',
      }, {    
        name: "Interest",
        data: dataB,
        color: 'lightblue',
      } ]    
    });

    var x_axis = new Rickshaw.Graph.Axis.X( { 
      graph: graph,
      element: document.getElementById('x_axis')
    });

    var y_axis = new Rickshaw.Graph.Axis.Y( {
      graph: graph,
      orientation: 'left',
      tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
      element: document.getElementById('y_axis'),
    });

    graph.render();

    // We look for the total savings of just the Future Value of B
    futureValueInterestString = "$" + futureValueB.formatMoney(2);
    $('#totalInterest').val(futureValueInterestString);

    futureValueNoInterestString = "$" + futureValueA.formatMoney(2);
    $('#totalNoInterest').val(futureValueNoInterestString);

    extraIncome = futureValueB - futureValueA
    differenceString = "$" + (extraIncome).formatMoney(2);
    $('#difference').val(differenceString);

    return extraIncome;
  }

  ///////////////////////////////////
  //Results of the Exercies / Goal //
  ///////////////////////////////////


  function testFVforMillionaire(futureValue) {
    console.log(futureValue)
    if (futureValue > 1000000) {
      $('.modal_content').text("You're a Millionare!!");
      $('#myModal').modal("show");
    } else {
      $('.modal_content').text('Keep Trying!');
      $('#myModal').modal("show");
    }
  }

  function testFVforEarnings(futureValue) {
    if (futureValue > 1000000) {
      $('.modal_content').text("Your a Millionaire. Did you see how much easier that was with interest rates?");
      $('#myModal').modal("show");
    } else {
      $('.modal_content').text("Keep Trying! The Goal is $1M");
      $('#myModal').modal("show");
    }
  }

  function testExtraIncome(extraIncome) {
    if (extraIncome > 100000) {
      $('.modal_content').text('You just saved ' + differenceString + ' Extra Income through the power of interest rates. Seems Awesome right.');
      $('#myModal').modal("show");
    } else {
      $('.modal_content').text('Keep trying. You only earned '+ differenceString + 
        ' in extra income');
      $('#myModal').modal("show");
    }
  }
});
