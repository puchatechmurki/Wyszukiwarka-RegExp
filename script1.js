//regExp - wyrażenie regluralne pozwalające sprawdzić ciąg znaków, wyfiltrować konkretnie szukany ciąg znaków, sprawdzać poprawność ciągu znaków
// 'i' - flaga 'i' pozwala ignorować czy znaki są z małej czy dużej litery

const input = document.querySelector("input");
const liItems = document.querySelectorAll("li");

const filterList = () => {
	liItems.forEach(item => {
		const match = new RegExp(input.value, "i").test(item.textContent)

        if(!match){
            item.style.display = 'none'
        }else{
            item.style.display = 'block'
        }
	});
};

input.addEventListener('keyup',filterList)
