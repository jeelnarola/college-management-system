export function popup(message = "Operation Successful", duration = 6000, backgroundColor = "bg-red-700") {
    let tost = document.getElementById("tostBox");
    
    // Check if the tostBox exists, if not return null
    if (!tost) {
        console.error("Popup container (tostBox) not found.");
        return null;
    }

    // Create the div for the popup
    let div = document.createElement('div');
    
    // Add classes for styling (using Tailwind CSS classes for example)
    div.setAttribute("class", `w-96 h-20 bg-white drop-shadow-md mx-3 my-0 ${backgroundColor} flex items-center justify-center text-white font-bold`);

    // Set the inner message of the popup
    div.innerHTML = message;

    // Append the popup to the toast container
    tost.appendChild(div);

    // Automatically remove the popup after the specified duration
    setTimeout(() => {
        div.remove();
    }, duration);

    // Return the div element (popup) for future manipulation if needed
    return tost;
}
export const add =(a,b)=>{
    return a+b;
}
