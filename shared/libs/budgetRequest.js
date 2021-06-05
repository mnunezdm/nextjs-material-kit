import { DATE, TYPES } from "../constants/refurbishment";

export const generateEmail = ({
  name,
  email,
  tel,
  address,
  type,
  date,
  comments,
}) => {
  console.log(type);
  const subject = encodeURI(`[PRESUPUESTO] ${name} - ${TYPES[type]}`);
  const body = encodeURI(
    [
      "¡Hola!",
      `Mi nombre es ${name}, este es mi email ${email} y este mi número de teléfono ${tel}`,
      `Estaría interesad@ en obtener un presupuesto para una reforma de tipo ${TYPES[type]} en ${address} para ${DATE[date]}`,
      "Dejo estos comentarios adicionales:",
      `${comments}`,
      "Un saludo",
      `${name}`,
    ].join("\n\n")
  );

  return `subject=${subject}&body=${body}`;
};
