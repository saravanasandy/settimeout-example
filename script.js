let button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","btn");
button.innerHTML="Start";
button.addEventListener("click",delay);
document.body.append(button);

function delay(){

    let fun10=(j)=>{
      setTimeout(() => {
        button.innerHTML=(j);
        fun9(j-1);
      }, 1500);
       
    }
    

    let fun9=(i)=>{
        setTimeout(()=>{
            button.innerHTML=(i);
            fun8(i-1);
        },1500);
       
    }
    let fun8=(h)=>{
        setTimeout(()=>{
            button.innerHTML=(h);
            fun7(h-1);
        },1500);
       
    }
    let fun7=(g)=>{
        setTimeout(()=>{
            button.innerHTML=(g);
            fun6(g-1);
        },1500);
       
    }
    let fun6=(f)=>{
        setTimeout(()=>{
            button.innerHTML=(f);
            fun5(f-1);
        },1500);
       
    }
    let fun5=(e)=>{
        setTimeout(()=>{
            button.innerHTML=(e);
            fun4(e-1);
        },1500);
       
    }
    let fun4=(d)=>{
        setTimeout(()=>{
            button.innerHTML=(d);
            fun3(d-1);
        },1500);
       
    }
    let fun3=(c)=>{
        setTimeout(()=>{
            button.innerHTML=(c);
            fun2(c-1);
        },1500);
       
    }
    let fun2=(b)=>{
        setTimeout(()=>{
            button.innerHTML=(b);
            fun1(b-1);
        },1500);
       
    }
    let fun1=(a)=>{
        setTimeout(()=>{
            button.innerHTML=(a);
            fun0(a-1);
        },1500);
       
    }
    let fun0=(ab)=>{
        setTimeout(()=>{
            button.innerHTML=("  💁‍♂️ Happy Independence Day 🎆🎇✨ ");
            
        },1500);
       
    }
    fun10(10);
}
