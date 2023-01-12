 const Shorten = (title)=>{
    const SpliteTitle = title.split(" ");
        const newTitle = `${SpliteTitle[0]} ${SpliteTitle[1]}`;
    
        return newTitle;
 }

 export {Shorten};