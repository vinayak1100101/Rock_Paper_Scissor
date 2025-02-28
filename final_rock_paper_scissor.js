 
            //const score={
            //    win:0,
            //    loose:0,
            //    tie:0,
            //};
            //console.log(JSON.parse(localStorage.getItem('score')));
            
            const score=JSON.parse(localStorage.getItem('score'))||{
                win:0,
                loose:0,
                tie:0
            };
            update_score()
            function update_score(){
                document.querySelector('.js-score').innerHTML=`wins is ${score.win} looses is ${score.loose} tie is ${score.tie}`
            }
            function resetf(){
                score.win=0;
                score.loose=0;
                score.tie=0; 
                localStorage.removeItem('score');
                update_score()
            }
            function computermove(){
                const arr=["rock","paper","scissor"];
                return arr[Math.floor(Math.random() * 3)];
            }
            function selection(option){
                let result="";
                let computermoves=computermove();
                if (computermoves==option){
                    result="Tie";
                    score.tie+=1
                }
                else if ((computermoves=='rock' && option=='paper') ||(computermoves=='paper' && option=='scissor') || (computermoves=='scissor' && option=='rock') ){
                    result="You win";
                    score.win+=1;
                }
                else{
                    result="You loose";
                    score.loose+=1;
                }
                localStorage.setItem('score',JSON.stringify(score));
                document.querySelector('.js-result').innerHTML=`${result}`
                document.querySelector('.js-moves').innerHTML=`you <img src="images/${option}.png" class="img"> computer <img src="images/${computermoves}.png" class="img">`
                update_score()
                
        
   
            }
            let intervelId;
            let IsAutoPlaying=false;
            function auto_play(){
                if(!IsAutoPlaying){
                    intervelId=setInterval(()=>{
                        const playermove=computermove();
                        selection(playermove);
                    },1000);
                    IsAutoPlaying=true
                }
                else{
                    clearInterval(intervelId);
                    IsAutoPlaying=false;
                }
            }
            
            