var app = new Vue({
    el: "#vue-app",
    data: {
        books: [],
        search: '',
    },
    
    created: function () {
        this.getData() 
    },
    
    computed: {
        filteredBooks: function(){
            return this.books.filter((book) => {
                return book.title.toLowerCase().indexOf(this.search.toLowerCase())>=0 ||  book.description.toLowerCase().indexOf(this.search.toLowerCase())>=0;
                });
            }
        },
        
     methods: {
        
        getData: function () {
            fetch("https://api.myjson.com/bins/zyv02", {
                    method: "GET",
                    headers: {
                    
                    }
                })
                .then(response => response.json())
                .then(json => {
                    data = json;
                    app.books = data.books;
                    
                })
                .catch(error => error)
        },
        
        
    }
     
})













