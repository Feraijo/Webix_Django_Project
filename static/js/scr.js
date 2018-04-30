function qwe(){
    alert('xcv')
}

var q = new webix.ui({
    container:'leftContent',
    rows:[
        {view:'button', label:'leftsdf', width:'200', click:qwe,},
    ],
    
    
    
})

new webix.ui({
    container:'rightContent',
    rows:[
        {view:'button', label:'rightsdf', width:'200', click:qwe,},
    ],
    
    
})

webix.ui({
    container:'mainC',
    
      view:"carousel",
      id:"carousel",
      width:800, height:600, 
      cols:[
        { css: "image", template:img, data:{src:"/static/images/1.jpg"} },
        { css: "image", template:img, data:{src:"/static/images/2.jpg"} },
        { css: "image", template:img, data:{src:"/static/images/3.png"} },
        
      ],
    
    top:150,
    left:150
  }).show();
  
  function img(obj){
    return '<img src="'+obj.src+'" class="content" ondragstart="return false"/>'
  }