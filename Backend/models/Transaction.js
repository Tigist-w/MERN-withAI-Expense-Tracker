const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name:{
        type: String,
        required: true,
       default: 'Uncategorized'
    },
    type:{
        type: String,
        required: true,
        enum: ['Income', 'Expense']
    },
    amount:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: false
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Transaction', transactionSchema);