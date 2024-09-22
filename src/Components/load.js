const Login = () =>{
    return `
        <section class="w-full absolute top-0 left-0 z-50">
    <div class="h-svh inset-0 bg-white">
        <div class="w-7/12 absolute top-36 left-80">
            <div class="flex  w-auto drop-shadow-2xl bg-white p-3">
                <div class="w-1/2 p-2">
                    <img src="../../src/Images/Login/Img-1.jpg" alt="">
                </div>
                <div class="w-1/2 pl-12 pt-10">
                   <form action="">
                    <div class="m-3">
                        <label for="">Email / SID : </label>
                        <input type="text" class="block p-3 border border-black focus:border-red-900 w-56 mt-3 drop-shadow font-serif text-xs" placeholder="Enter A Email / SID Number">
                    </div>
                    <div class="m-3">
                        <label for="">Password : </label>
                        <input type="text" class="block p-3 border border-black focus:border-red-900 w-56 mt-3 drop-shadow font-serif text-xs" placeholder="Enter A Password">
                    </div>
                    <button type="button" class="bg-indigo-500 ml-11 mt-8 block p-3 w-1/2 rounded-xl hover:bg-white hover:border hover:border-black transition-all text-white hover:text-black hover:scale-95 hover:drop-shadow-2xl">Submit</button>
                   </form>
                </div>
            </div>
        </div>
    </div>
    </section>
    `
}
export {Login}