//user reviews
class Review {
    //encapsulation
    #author;
    #title;
    #content;

    constructor(author, title, content, rating) {
        this.#author = author;
        this.#title = title;
        this.#content = content;
        this.rating = rating;
        this.timestamp = new Date();
    }

    //returns helper object for database storage and UI generation
    get_info() {
        return {
            author: this.#author.get_author_string(),
            title: this.#title,
            rating: this.rating,
            timestamp: this.timestamp,
            content: this.#content
        };
    }

    //method abstraction (simple interface, complex task)
    addReview(dorm_name) {
        //to be implemented
    }
}

//simple class for use in review class
class User {
    #username;
    #email;

    constructor(username, email){
        this.#username = username;
        this.#email = email;
    }

    get_author_string(){
        return this.#username + '(' + this.#email + ')';
    }
}

export { Review, User };
