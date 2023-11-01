// 生成一个新的唯一ID  
function generateUniqueId() {  
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';  
    let id = '';  
    for (let i = 0; i < 16; i++) {  
        id += chars[Math.floor(Math.random() * chars.length)];  
    }  
    return id;  
}  
  
// 检查localStorage中是否存在唯一ID  
if (localStorage.getItem('ID')&&localStorage.getItem('key')) {  
    // 如果存在，则打印唯一ID  
   //  console.log('Unique ID:', localStorage.getItem('ID'));
  // console.log('Unique key:', localStorage.getItem('key'))
} else {  
   //如果没有唯一ID，则生成一个新的唯一ID并存储在localStorage中  
     const ID = Math.random().toString(36).substring(7);  
    localStorage.setItem('ID', ID);
   
    const key = generateUniqueId();  
    localStorage.setItem('key', key);  
  
    // 打印唯一ID  
 // console.log('Unique ID:',ID );
  // console.log('Unique :', key);
    
}