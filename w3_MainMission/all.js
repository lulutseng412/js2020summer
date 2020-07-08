new Vue({
    el:'#app',
    data:{
        healthynewsList:[
            {
                id:1594195966000,
                title:'初學者的健康飲食',
                category:'健康飲食',
                content:'想踏入原型食物的健康飲食但不知道該怎麼下手嗎?',
                description:'新手的健康飲食該怎麼做?如何找到適合自己的飲食指南?',
                imageUrl:'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80',
                is_enabled:1,
                clickCount:0,
                member:'嚕嚕',
                createDate:'2020年07月06日'
            },
            {
                id:1594252818665,
                title:'依據體質及習慣來選擇運動',
                category:'健康運動',
                content:'適合別人的運動不一定適合你,從了解自己開始',
                description:'運動除了有效還必須持之以恆!認識自己的體態來選擇適當的運動',
                imageUrl:'https://images.unsplash.com/photo-1579722820903-01d3e776f85e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                is_enabled:1,
                clickCount:0,
                member:'嚕嚕',
                createDate:'2020年07月07日'
            }
        ],
        tempNews: {},
    },
    methods:{
        openModal(isNew, item) {//打開彈跳視窗的方法
            switch (isNew) {
              case 'new'://建立新新聞
                this.tempNews = {};
                $('#NewsModal').modal('show');//bootstrap的Modal用法
                break;
              case 'edit'://編輯新聞
                this.tempNews = Object.assign({}, item);//編輯使用淺拷貝,放進暫存之後給畫面顯示
                $('#NewsModal').modal('show');
                break;
              case 'detail'://詳細資料
                item.clickCount ++;
                this.tempNews = Object.assign({}, item);
                $('#PreviewModal').modal('show');
                break;
              case 'delete'://刪除新聞
                $('#delNewsModal').modal('show');
                this.tempNews = Object.assign({}, item);
                break;
              default:
                break;
            }
        },
        updateNew(){//更新新聞資料,分成新增跟編輯
            if (this.tempNews.id) {//如果id存在表示是編輯存檔
                this.healthynewsList.forEach((item,i) => {
                    if(item.id == this.tempNews.id){
                        this.healthynewsList[i] = this.tempNews;
                    }
                });
            }else{//不存在id表示是新增
                this.tempNews.id = new Date().getTime();
                this.tempNews.clickCount = 0;
                var Today = new Date();
                this.tempNews.createDate = Today.getFullYear()+"年" + (Today.getMonth()+1) +"月" + Today.getDate() +"日";
                this.healthynewsList.push(this.tempNews);
            }
            //清空暫存的資料
            this.tempNews = {};
            //把彈跳視窗隱藏
            $('#NewsModal').modal('hide');
        },
        delNews(){
            this.healthynewsList.forEach((item,i) => {
                if(item.id == this.tempNews.id){
                    this.healthynewsList.splice(i, 1);
                }
            });
            //清空暫存的資料
            this.tempNews = {};
            //把彈跳視窗隱藏
            $('#delNewsModal').modal('hide');
        }
    }

})