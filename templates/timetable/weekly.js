
fetch ('http://127.0.0.1:5000/getUserID')
.then((res)=> res.json())
.then((data) => {
    // console.log(data)
    weeklyTableID = data[1];
    const link = `http://127.0.0.1:5000/getTable/${weeklyTableID}`;

    return fetch(link)
})
.then((res) => res.json())
.then(data => {
    console.log(data)

    var cur_data = data;

    for (i in data) {
        if (i == 0) {
            
            $("p").append(`<b>${data[i][1].time}</b>`);
        }
    }
    document.getElementById('submit').addEventListener('click',()=>{
        var d = document.getElementById("day").value;
        var start = document.getElementById("time_start").value;
        var end = document.getElementById("time_end").value;
        var name = document.getElementById("name").value;
        var des = document.getElementById("description").value;
        
        console.log(d,start,end,name,des);

        var i = 0;
        while (cur_data[d][i] != undefined) {
            i++;
        }
        console.log(i);
        cur_data[d][i] = {
            time:start+ '-' + end,
            name: name,
            description: des,
        }
        $("button").click(function(){
            $("#bitch").append(`<div>${cur_data[d][i].name}</div>`);
          });
    });
        
    document.getElementById('save').addEventListener('click',()=>{
        fetch(`http://127.0.0.1:5000/update_table`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(cur_data),
        
        })
    });
        

});


console.log('HIi');
var data=[{
    1:{
        name:"Bao",
        time:"9:30-8:30",
        description:"lambaitapvenha",

    },
    2:{
        name:"Bao",
        time:"9:30-8:30",
        description:"danh nhau"
    },
    3:{
        name:"Ly",
        time:"9:30-8:30",
        description:"baobeo"
    }
}]
// for (i=0; i<=data.length; i++){

//     for (key in data[i]){
//         var node = document.createElement("button");
//         var cach=document.createElement("br")
//         var job=document.createElement("span")
//         var text=document.createTextNode(data[i][key].name)
//         node.setAttribute("class","button5")
//         job.setAttribute("class","job")
//         job.appendChild(text)
//         var time=document.createElement("span")
//         var text=document.createTextNode(data[i][key].time)
//         time.setAttribute("class","time")
//         time.appendChild(text)
//         var des=document.createElement("span")
//         var text=document.createTextNode(data[i][key].description)
//         des.setAttribute("class","des")
//         des.appendChild(text)
//         document.getElementById("addtask").appendChild(node);
//         document.getElementById("addtask").appendChild(job);
        
//         document.getElementById("addtask").appendChild(time);
//         document.getElementById("addtask").appendChild(des);
//         document.getElementById("addtask").appendChild(cach)             
//     }
// }
// a=document.getElementsByClassName("des")
// console.log(a)
// a[0].style.display="block"
// b=document.getElementsByClassName('job')

// for (i=0; i<a.length; i++){
//     console.log(i)
//     console.log(a[i])
//     console.log(a[i])
    
//     b[i].addEventListener("click", function(e){
//         console.log(e.target)
//         for (i=0; i<a.length; i++){
//             if (b[i]==e.target){
//                 a[i].style.display="none"
//             }
//         }
        
//     });
// }
