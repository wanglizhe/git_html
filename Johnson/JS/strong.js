// JavaScript Document
 $(function(){
	  
	  $(".grt_1").click(function(){
		  var ort = $(".ort_2");
		  var son = $(".input_ort1");
		  ort.toggle();
		  var ai = $(".ort_2 ul li");
		  ai.click(function(){
			  ort.hide();
		var inp = $(".input_ort").text();
		var tt = $(this).text();
		son.text(tt);
		
		
			  })
		  })
		  
		   $(".grt_2").click(function(){
		  var ort = $(".ort_4");
		  var son = $(".input_ort2");
		  ort.toggle();
		  var xi = $(".ort_4 ul li");
		  xi.click(function(){
			  ort.hide();
		var inp = $(".input_ort").text();
		var tt = $(this).text();
		son.text(tt);
		
		
			  })
		  })
	 
	  
     $(".str_1").click(function(){
		 
		$(this).parents().siblings("div").find(".rist").hide();
		 var clas = $(this).attr("class")
		 var sub = clas.substring(12);
		 var fl = ".fj_fu_"+sub;
		 $(fl).toggle();
		var li = $(fl).find("li");
		li.click(function(){
		var tt = $(this).text();
		var work = ".txt_"+sub;
		$(work).text(tt);
		$(fl).hide();
		
      })
      })
	  
	   $(".str_2").click(function(){
		   $(this).parents().siblings("div").find(".rist").hide();
		 var clas = $(this).attr("class")
		 var sub = clas.substring(12);
		 var fl = ".fj_fu_"+sub;
		 $(fl).toggle();
		var li = $(fl).find("li");
		li.click(function(){
		var tt = $(this).text();
		var work = ".txt_"+sub;
		$(work).text(tt);
		$(fl).hide();
	
      })
      })
	  
	   $(".str_3").click(function(){
		   $(this).parents().siblings("div").find(".rist").hide();
		 var clas = $(this).attr("class")
		 var sub = clas.substring(12);
		 var fl = ".fj_fu_"+sub;
		 $(fl).toggle();
		var li = $(fl).find("li");
		li.click(function(){
		var tt = $(this).text();
		var work = ".txt_"+sub;
		$(work).text(tt);
		$(fl).hide();
		
      })
      })
	  
	  
	   $(".str_4").click(function(){
		   $(this).parents().siblings("div").find(".rist").hide();
		 var clas = $(this).attr("class")
		 var sub = clas.substring(12);
		 var fl = ".fj_fu_"+sub;
		 $(fl).toggle();
		var li = $(fl).find("li");
		li.click(function(){
		var tt = $(this).text();
		var work = ".txt_"+sub;
		$(work).text(tt);
		$(fl).hide();
	
      })
      })
	  
	   $(".str_5").click(function(){
		   $(this).parents().siblings("div").find(".rist").hide();
		 var clas = $(this).attr("class")
		 var sub = clas.substring(12);
		 var fl = ".fj_fu_"+sub;
		 $(fl).toggle();
		var li = $(fl).find("li");
		li.click(function(){
		var tt = $(this).text();
		var work = ".txt_"+sub;
		$(work).text(tt);
		$(fl).hide();
		
      })
      })
	  
	$(".hour1").click(function(){
		var src = $(this).attr("src");
	
		if(src=="images/store_one.jpg"){
			$(this).attr("src","images/store_two.jpg");
			$(this).parent(".houst").find(".hour2").attr("src","images/store_one.jpg")
			}
		if(src=="images/store_two.jpg"){
			$(this).attr("src","images/store_one.jpg")
			$(this).parent(".houst").find(".hour2").attr("src","images/store_two.jpg")
			}
		
		
		})
		
		$(".hour2").click(function(){
		var src = $(this).attr("src");
	
		if(src=="images/store_one.jpg"){
			$(this).attr("src","images/store_two.jpg");
			$(this).parent(".houst").find(".hour1").attr("src","images/store_one.jpg")
			}
		if(src=="images/store_two.jpg"){
			$(this).attr("src","images/store_one.jpg")
			$(this).parent(".houst").find(".hour1").attr("src","images/store_two.jpg")
			}
		
		
		})
	           
		 function lxfEndtime(){
          $(".day_s").each(function(){
               
                var endtime = new Date($(this).attr("endtime")).getTime();
                var nowtime = new Date().getTime();       
                var youtime = endtime-nowtime;
                var seconds = youtime/1000;
                var minutes = Math.floor(seconds/60);
                var hours = Math.floor(minutes/60);
                var days = Math.floor(hours/24);
                var CDay= days ;
                var CHour= hours % 24;
                var CMinute= minutes % 60;
                var CSecond= Math.floor(seconds%60);
                if(endtime<=nowtime){
                        $(this).parent(".mist").hide();
						$(this).parents("#word").find(".mist2").show();
                        }else{
                               $(this).html(days+1)
                        }
          });
   setTimeout("lxfEndtime()",1000);
  };

      lxfEndtime();

		
  })