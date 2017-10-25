//텝에 사용되는 클래스
class Tab{

    constructor(tabSelector){
        
        this.tabMenu = $(tabSelector).find(".tabMenu li");
        this.tabContent = $(tabSelector).find(".contents ul li");
        this.addEvent();
        
    }
    
    addEvent(){
        let _this = this;
        
        this.tabMenu.each( function(index) {
            //각각의 메뉴 클릭시
            var $this = $(this)
            $this.click(function(){
                console.log(index)//0 1 2 3 
                _this.tabContent.css("display" , "none")
                _this.tabContent.eq(index).css("display" , "block")
            })        
        }) 
        
    }
    
}





//Main 클래스는 Tab 클래스를 상속 받는다
class Main extends Tab{

    constructor(tabSelector){
        
        super(tabSelector)
        
    }
    
}