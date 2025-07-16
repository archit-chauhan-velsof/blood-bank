import * as Yup from "yup";
import {
  bloodGroup_required,
  bloodQuantity_positive,
  bloodQuantity_required,
  dateOfCollection_required,
} from "../messages/messages";

export const addInventory_Schema = Yup.object({
  blood_group: Yup.string().required(bloodGroup_required),
  quantity: Yup.number()
    .positive(bloodQuantity_positive)
    .required(bloodQuantity_required),
  doc: Yup.date().required(dateOfCollection_required),
});
