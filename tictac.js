
 	var n=0;
	var over=0;
	var p1 = "";
	var p2 = "";
	var grid = new Array(3);
	var game=1; //1P or 2P
	var turnp=1; //turn of player1 or player2 (for 2P)
	function ref()
	{
		init();
		pre();
	}

    function pre(){
	 n=1;
	 document.getElementById('grid').style.visibility='hidden';
	 document.getElementById('desc').style.visibility="";
	 document.getElementById('p2').innerHTML="";
	}
	
	function init(){
		
		document.getElementById('homeP').style.display='home';
		if(!n) pre();
		else{
			 over = count = 0;
			 document.getElementById('canvas1').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas2').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas3').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas4').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas5').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas6').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas7').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas8').getContext('2d').clearRect(0,0,100,100);
			 document.getElementById('canvas9').getContext('2d').clearRect(0,0,100,100);
		}
		for (i = 0; i < 3; i++)
			grid[i]=new Array(3);
		
		for(i=0; i < 3; i++)
			for(j=0; j< 3; j++)
				{
					grid[i][j]=0; //alert(grid[i][j]);
				}
	}
	var i;
	var j;
	var count=0;
	
	function ticTac(i, j){
		if(game==1)
			ticTacToe(i, j);
		else
			ticTacToe2(i, j);
	}
	
	//For 1 player
	function ticTacToe(i, j) {
		// check validity
		if(over==1) { alert("This game is over, Kindly press 'Restart Game' to play again.");return;}
		if (grid[i][j]==1||grid[i][j]==2) {
			alert("Already clicked on");
			return;
		}
		else
		{
			grid[i][j]=1;
			var c=document.getElementById("canvas"+(i*3+j+1));
			var ctx=c.getContext("2d");
			var img=document.getElementById("i1");
			ctx.drawImage(img,1,1,60,60);			
			count++;
		}
		
		//Checking if the user won
		var flag = false;
		for (i=0; i < 3; i++) {
			if (grid[i][0]==1 && grid[i][1]==1 && grid[i][2]==1) {
				flag=true;
				break;
			}
			if (grid[0][i]==1 && grid[1][i]==1 && grid[2][i]==1) {
				flag=true;
				break;
			}
		}
		if (grid[0][0]==1 && grid[1][1]==1 && grid[2][2]==1)
			flag = true;
		if (grid[0][2]==1 && grid[1][1]==1 && grid[2][0]==1)
			flag=true;
		
		if (flag==1) {
			alert("Congratulations "+ p1 +"! You won!");
			over=1;
			document.getElementById('turn').innerHTML = "";
			//way to close the app
			return ;
		}				
		
		//computer's turn
		if(count==9)
		{
			 alert("Alas! It was a tie. ");
			 over=1;
			 document.getElementById('turn').innerHTML = "";
			 return ;
		}
		var k = Math.floor(((Math.random()*10)+1)%3);
		var l = Math.floor(((Math.random()*10)+1)%3);
		
		while (grid[k][l]==1 || grid[k][l]==2) {
			k = Math.floor(((Math.random()*10)+1)%3);
			l = Math.floor(((Math.random()*10)+1)%3);
		}
		grid[k][l]=2;		
		var c=document.getElementById("canvas"+(k*3+l+1));
		var ctx=c.getContext("2d");
		var img=document.getElementById("i2");
		ctx.drawImage(img,1,1,60,60);
		count++;
			
		//check if system won
		flag = false;
		for (i=0; i < 3; i++) {
			if (grid[i][0]==2 && grid[i][1]==2 && grid[i][2]==2) {
				flag=true;
				break;
			}
			if (grid[0][i]==2 && grid[1][i]==2 && grid[2][i]==2) {
				flag=true;
				break;
			}
		}
		if (grid[0][0]==2 && grid[1][1]==2 && grid[2][2]==2)
			flag = true;
		if (grid[0][2]==2 && grid[1][1]==2 && grid[2][0]==2)
			flag=true;
		
		if (flag) {
			alert("Sorry! You Lost!"); 
			over=1;
			document.getElementById('turn').innerHTML = "";
			//way to close the app
			return ;
		}
		
	}
	
	//For 2 player
	var count=0;
	over=0;
	n=0;
	var turn=1;
	// Finished = 1 ==> Game over
	var finished = 0;
	
	function ticTacToe2(i, j) {
		if(turnp==1)
		{
			turnp=2;
			document.getElementById('p2').innerHTML=p2 +"'s chance";
		}
		else {
			turnp=1;
			document.getElementById('p2').innerHTML=p1 +"'s chance";
		}
		
		// check validity
		if(over==1) { alert("This game is over, Kindly press 'Restart Game' to play again.");return;}
		if (grid[i][j]==1 || grid[i][j]==2) {
			alert("Already clicked on");
			return;
		}
		else
		{
			grid[i][j]=turnp;
			var c=document.getElementById("canvas"+(i*3+j+1));
			var ctx=c.getContext("2d");
			if(turnp==1)
				var img=document.getElementById("i1");
			if(turnp==2)
				var img=document.getElementById("i2");
			ctx.drawImage(img,1,1,60,60);			
			count++;
		}
		
		//Checking if the user won
		var flag = false;
		for (i=0; i < 3; i++) {
			if (grid[i][0]==turnp && grid[i][1]==turnp && grid[i][2]==turnp) {
				flag=true;
				break;
			}
			if (grid[0][i]==turnp && grid[1][i]==turnp && grid[2][i]==turnp) {
				flag=true;
				break;
			}
		}
		if (grid[0][0]==1 && grid[1][1]==1 && grid[2][2]==1)
			flag = true;
		if (grid[0][2]==1 && grid[1][1]==1 && grid[2][0]==1)
			flag=true;
		
		if (flag==true) {
			if(turnp==1)
				alert("Congratulations "+ p1 +"! You won!");
			if(turnp==2)
				alert("Congratulations "+ p2 +"! You won!");
			over=1;
			document.getElementById('turn').innerHTML = "";
			//way to close the app
			return ;
		}				
		
		if(count==9)
		{
			 alert("Alas! It was a tie. ");
			 over=1;
			 document.getElementById('turn').innerHTML = "";
			 return ;
		}
	}
	
	//One player Option clicked
	function showOne()
	{
		init();
		document.getElementById('homeP').style.display='none';
		document.getElementById('grid').style.visibility="";
		document.getElementById('p2').style.visibility='hidden';
		document.getElementById('p2').style.visibility='hidden';
		p1=prompt("Please enter your name","Harry Potter");
		if(!p1)
		 p1 = "Harry Potter";
		game=1;
	}
	
	//Two Player Option clicked
	function showTwo()
	{
		init();
		document.getElementById('homeP').style.display='none';
		document.getElementById('grid').style.visibility="";
		p1=prompt("Player1, Please enter your name","Harry Potter");
		p2=prompt("Player2, Please enter your name","Hermione Granger");
		if(!p1) p1 = "Harry Potter";
		if(!p2) p2 = "Hermione Granger";		
		game=2;
		document.getElementById('p2').style.visibility="";
		document.getElementById('p2').innerHTML=p1 +"'s chance";		
	}