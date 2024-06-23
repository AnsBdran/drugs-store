import { drugDosages, drugForms } from '$lib/info';
import { Schema, model } from 'mongoose';

const infoSchema = new Schema(
	{
		drug_forms: {
			type: [String],
			default: drugForms
		},
		drug_dosages: {
			type: [String],
			default: drugDosages
		}
	},
	{
		timestamps: true
	}
);

export const DrugsInfo = model('DrugsInfo', infoSchema);
