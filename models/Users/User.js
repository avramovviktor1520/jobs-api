const User = {
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength:5,
        maxlength:30
    },
    email: {
        type: String,
        required: [true, 'Please provide a name'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Please provide a valid email'
        ],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength:6,
    },

    status: {
        type: String,
        enum: ["Pending", "Active"],
        default: "Pending"
    }
    
}

module.exports = User;