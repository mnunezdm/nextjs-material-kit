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
  const subject = encodeURI(`Solicitud presupuesto ${TYPES[type]} ${name}`);
  const body = encodeURI(
    [
      "Hola!",
      `Mi nombre es ${name}, este es mi email ${email} y este mi número de telefono ${tel}`,
      `Estaria interesad@ en obtener un presupuesto para una reforma de tipo ${TYPES[type]} en ${address} para ${DATE[date]}`,
      "Dejo estos comentarios adicionales:",
      `${comments}`,
      "Un saludo",
      `${name}`,
    ].join("\n\n")
  );

  return `subject=${subject}&body=${body}`;
};
