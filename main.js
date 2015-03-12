
//Listen for user to save form
	$('#form').submit(function(event) {//make sure you're calling the form, not the button. :)
		event.preventDefault();

		//store both field value
		var name = $("input#name").val();

		//store colorOptions field value
	  	var color = $("input:radio[name=colorOptions]:checked").val();

	  	myStorage(name, color);

	});


//Set Local Storage
	function myStorage(name, color){
		//Set Local Storage
		var myName = name;
		var thisColor = color;
		localStorage.setItem('user', JSON.stringify({
		    name: myName,
		    color: thisColor
		    }));

	    //Get/Append Local Storage
    	var StorageDiv = $('.StorageDiv');
		var locStorageValues = JSON.parse(localStorage.getItem('user'));
		console.log(locStorageValues);
		StorageDiv.append( 
							'<div class = "locStorageValues">'
							+ "Exuse me, "
							+ locStorageValues.name
							+ "...did you know your GUID is:"
							+ '</div>'
							);


		//Set Session Storage
		//This code sourced from: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript - Thanks broofa!
			'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		    console.log((v.toString(16)));
		    var guid = (v.toString(16));
		    sessionStorage.setItem('guid', JSON.stringify({
		    guid: guid
		    }));
		    
			//Get/Append Session Storage
    		var sessionStorageValues = JSON.parse(sessionStorage.getItem('guid'));
			console.log(sessionStorageValues);
			StorageDiv.append( 
							'<div class = "sessionStorageValues">'
							+ sessionStorageValues.guid
							+ '</div>'
							);

		    });

	    $('body').css({"background-color": thisColor });

	}


