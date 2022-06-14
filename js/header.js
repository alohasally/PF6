$(document).ready(
    function(){
        /*첫번째대메뉴li에 마우스를 올리면 실행해라*/
        
        $("ul.gnb>li:eq(0)").hover(
            //li:eq(0)는 첫번째위치한 li를 의미	
            //()안에 명령을 위치시킬때는 function(){}을 배치한다..
                function(){
                        $("ul.gnb>li:eq(0) .subWrap").removeClass("subOut");
                       // $("ul.gnb>li:eq(0) .subWrap").css({top:"35px"});
                       // $("ul.gnb>li:eq(0) .subWrap").show().animate({top:'55px',opacity:1},500);
                    }
                //    function(){
                       // $("ul.gnb>li:eq(0) .subWrap").animate({top:'35px',opacity:0},500);
                    
                
            );	
        
               /* $("ul.gnb>li").hover(
                
                    function(){
                
                        $(this).childeren("ul").css("opacity", 0);
                        $(this).childeren("ul").css({top:"35px"});
                        $(this).childeren("ul").show().animate({top:'55px',opacity:1},500);
                        },
                     
                        $(this).childeren("ul").css("opacity", 0).css({top:"35px"}).show().animate({top:'55px',opacity:1},500);
                    },
                        function(){
                        $(this).childeren("ul").animate({top:'35px',opacity:0});
                        }  
                         
                    
                );	 */	
                    }
);