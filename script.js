const arc=document.querySelector('.left .down .chats .arc');
const arcArea=document.querySelector('.left .arc-area');
const back=document.querySelector('.left .arc-area .up .back img')
const back2=document.querySelector('.left .down .search .warea .back')
const sea=document.querySelector('.left .down .search .warea .sea')
const seaArea=document.querySelector('.left .down .search .warea .searArea')
const text=document.querySelector('.left .down .search .warea .text')
const right=document.querySelector('.right')
const left=document.querySelector('.left')
const chat=document.querySelector('.chats')
const textArea=document.querySelector('.chat-area .text-area')
const textUp=document.querySelector('.chat-area .top')
const chatSend=document.querySelector('.chat-areas .chat-area .down input')
const mic=document.querySelector('.chat-areas .chat-area .down .mic')
const send=document.querySelector('.chat-areas .chat-area .down .send')
const cs=document.querySelector('.left .down .chats .c-list .cs')
const cs2=document.querySelector('.left .arc-area .c-area .c-list .cs')
const chatsArea=document.querySelector('.chat-areas')

cs.addEventListener('click', () => {
    chatsArea.classList.toggle('chat-areas-a');
})
cs2.addEventListener('click', () => {
    chatsArea.classList.toggle('chat-areas-a');
})
arc.addEventListener('click', () => {
    arcArea.classList.add('arc-area-a');
    arcArea.classList.remove('arc-area-b');
})
back.addEventListener('click', () => {
    arcArea.classList.remove('arc-area-a');
    arcArea.classList.add('arc-area-b');
})  
seaArea.addEventListener('click', () => {
    back2.classList.add('ba');
    back2.classList.remove('bab');
    sea.classList.add('se');
    sea.classList.remove('seb');
    text.classList.add('te');
    text.classList.remove('tab');
})  
sea.addEventListener('click', () => {
    back2.classList.add('ba');
    back2.classList.remove('bab');
    sea.classList.add('se');
    sea.classList.remove('seb');
    text.classList.add('te');
    text.classList.remove('tab');
})  
text.addEventListener('click', () => {
    back2.classList.add('ba');
    back2.classList.remove('bab');
    sea.classList.add('se');
    sea.classList.remove('seb');
    text.classList.add('te');
    text.classList.remove('tab');
})  
right.addEventListener('click', () => {
    back2.classList.remove('ba');
    back2.classList.add('bab');
    sea.classList.remove('se');
    sea.classList.add('seb');
    text.classList.remove('te');
    text.classList.add('tab');
})  
chat.addEventListener('click', () => {
    back2.classList.remove('ba');
    back2.classList.add('bab');
    sea.classList.remove('se');
    sea.classList.add('seb');
    text.classList.remove('te');
    text.classList.add('tab');
})
chatSend.addEventListener('click', () => {
    send.classList.add('sen');
    send.classList.remove('sen-b');
    mic.classList.add('mi');
    mic.classList.remove('mi-b');
})
left.addEventListener('click', () => {
    send.classList.remove('sen');
    send.classList.add('sen-b');
    mic.classList.remove('mi');
    mic.classList.add('mi-b');
})
textArea.addEventListener('click', () => {
    send.classList.remove('sen');
    send.classList.add('sen-b');
    mic.classList.remove('mi');
    mic.classList.add('mi-b');
})
textUp.addEventListener('click', () => {
    send.classList.remove('sen');
    send.classList.add('sen-b');
    mic.classList.remove('mi');
    mic.classList.add('mi-b');
})