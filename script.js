const ans = document.getElementById("type");
const btn = document.getElementById("start")
let l , wpm , val;
const resultDiv = document.getElementById("result")

const wpmDiv = document.getElementById("words")
const contentDiv = document.getElementById("contents")
const resetDiv = document.getElementById("reset")

const contents = ['Simply put a paragraph is a collection of sentences all related to a central topic idea or theme Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly Imagine how much harder reading and writing would be if everything was just one long block of text There is a lot of flexibility when it comes to writing paragraphs but if there is one steadfast rule it is this Paragraphs should relate to one main topic or point ',
'Ocean water is salty The saltiness comes from a chemical substance called sodium chloride which is dissolved in the water The salt that people eat is sodium chloride in the form of crystalsWinds and other forces cause ocean water to be constantly in motion Large amounts of ocean water move around Earth in patterns called currents Ocean currents may be warm or cold Warm currents tend to bring warm weather and rain to nearby land Cold currents tend to cause a dry climate The Gulf Stream is a warm current that runs north along the eastern coast of the United States',
'The dog is a pet animal A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers.  A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers. .',
'Books contribute to every ones’ lives in one way or another. The impact left on us by books can begin from uplifting our mood to making us proficient in a certain field. The books are a medium through which writers can reach a larger audience, and readers can get a peek into the writers’ thoughts.There are many kinds of books based on their size, packaging, and genres. An individual can read any book to gain knowledge about that particular field. Reading is an activity that is not bound for any particular age group. But it is suggested that children should be encouraged to read more books for it later becomes a good practice.',
'Friendship is a divine relationship. We don’t have similarities in our blood, but still, that person cares for us. Irrespective of all differences, a friend chooses you, understands you, and supports you. Whenever you are in self-doubt or lacking confidence, talk to a friend, and your worry will surely go away.A true friend will always want your happiness. A life without a good friend is merely empty. Honesty is the key factor to maintain the friendship forever. ']

const ran = Math.floor(Math.random()*5)
const para = contents[ran];


contentDiv.innerHTML = para;

    function overAll()
    {
        
        

            
                document.getElementById("type").disabled = false;
                if( ans.value == "")
            {
                resultDiv.innerHTML = "START TYPING"
            }
            
            else{
            
                val = ans.value.split(" ").join("").length;
                console.log(val)

                const ans1 = new Array(ans.value)
                
                console.log(ans1)
                


                const arrValues = ans1.map((items)=>{
                
                return items.length
                })
                
                console.log(ans1);
                l = arrValues;
                console.log(l);
                wpm = Math.floor((l / 5)/1);
                console.log(wpm)
            
                

            }document.getElementById("start").disabled = true
            document.getElementById("reset").disabled = true


                    
                        if(setTimeout(overAll,60000)  && l )
                    {
                        
                        resultDiv.innerHTML = `CHARACTERS PER MINUTE IS ${val}`
                        wpmDiv.innerHTML = `WORDS PER MINUTE IS ${wpm}`
                        document.getElementById("type").disabled = true;
                        document.getElementById("reset").disabled = false
                        
                    }
                    
        
                    }
                    
                    
            
            
        
            
                

