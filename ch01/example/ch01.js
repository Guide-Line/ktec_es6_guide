//메뉴에 사용되는 클래스
class Menu{

    constructor(menuSelector) {        
        this.menuSelector = menuSelector;
        this.addEvent();
    }
    
    addEvent(){       
        
        let _this = this         
        
        $(this.menuSelector).each( function(index) {
            //각각의 메뉴 클릭시
        	var $this = $(this)
        	$this.click(function(){
                //console.log(index)
        		selectMenu(index);// 클릭된 메뉴를 활성화 시켜줌
               
        	})        
        })      
        
        let temp = -1;
        function selectMenu (n){
        	if(temp != -1){
                var off = $(_this.menuSelector +'>a').eq(temp).find('img').attr('src').replace(/_on.jpg/,'_off.jpg')
                $(_this.menuSelector +'>a').find('img').eq(temp).attr('src' , off)
        	}
            var on = $(_this.menuSelector +'>a').eq(n).find('img').attr('src').replace(/_off.jpg/,'_on.jpg')
            $(_this.menuSelector +'>a').find('img').eq(n).attr('src' , on)
        	temp = n
        }
        selectMenu(0)
    }
}



//메인 클래스
class Main extends Menu{
    
    constructor( menuSelector ) {
        
        super(menuSelector); //Menu 클래스의  변수로 전달역활
        
    }
    
}


