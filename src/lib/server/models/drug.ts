import { Schema, model } from 'mongoose';
import { drugDosages, drugForms } from '$lib/info';

const countSchema = new Schema(
	{
		batches: {
			type: Number,
			required: true
		},
		items: {
			type: Number,
			required: true
		}
	},
	{ _id: false }
);

const priceSchema = new Schema({
	original: {
		type: Number,
		required: true
	},
	sale: {
		type: Number,
		default: function () {
			return this.original - (this.discount || 0);
		}
	}
});

// ===================
// Drug Item schema
const drugItemSchema = new Schema({
	form: {
		type: String,
		enum: drugForms,
		required: true
	},
	dosage: {
		type: String,
		enum: drugDosages,
		required: true
	},
	price: {
		type: priceSchema,
		required: true
	},
	quantity_in_stock: {
		type: countSchema
	},
	image_url: String,
	description: {
		type: String,
		required: false
	},
	likes_count: {
		type: Number,
		default: 0
	},
	// total_count: {
	// 	type: countSchema,

	// },
	is_available: {
		type: Boolean,
		default: true
	},
	discount: {
		type: Number,
		default: 0
	}
}, {
	timestamps: true
});

drugItemSchema.pre('save', function (next) {
	if (this.isModified('price') || this.isModified('discount')) {
		this.price.sale = this.price.original - (this.discount || 0);
	}
	next();
});
// ===================
// Manufacturer schema
const manufacturerSchema = new Schema({
	name: String,
	country: String
}, {
	timestamps: true
});

// ===================
// Drug schema
const drugSchema = new Schema({
	createdAt: {
		type: Date,
		defa
	}
	name: {
		type: String,
		required: true
	},
	manufacturer: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Manufacturer'
	},
	drugItems: {
		type: [Schema.Types.ObjectId],
		ref: 'DrugItem'
	},
	active_ingredients: {
		type: [String],
		required: true,
		validate: (v: string[]) => Array.isArray(v) && v.length > 0
	},
	indications: {
		type: [String],
		required: true,
		validate: (v: string[]) => Array.isArray(v) && v.length > 0
	},
	containdications: {
		type: [String],
		required: true,
		validate: (v: string[]) => Array.isArray(v) && v.length > 0
	},
	generic_name: String
}, {
	timestamps: true
});

export const DrugItem = model('DrugItem', drugItemSchema);
export const Drug = model('Drug', drugSchema);
export const Manufacturer = model('Manufacturer', manufacturerSchema);
