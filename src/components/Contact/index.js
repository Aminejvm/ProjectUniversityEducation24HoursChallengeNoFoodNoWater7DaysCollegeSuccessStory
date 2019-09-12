import React from "react";
import "antd/dist/antd.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Box } from "atomic-layout";
import { Button } from "antd";
const country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

const initValues = {
  email: "",
  prenom: "",
  nom: "",
  address: "",
  phone: "+212",
  country: "Morocco",
  university: "",
  additional: "",
  licence: true
};

const InscriptionSchema = Yup.object().shape({
  email: Yup.string().required("This input is required"),
  prenom: Yup.string().required("This input is required"),
  nom: Yup.string().required("This input is required"),
  university: Yup.string().required("This input is required"),
  address: Yup.string()
    .required("This input is required")
    .min(4, "too short for an address"),
  phone: Yup.number("Only numbers allowed here").min(
    7,
    "too short for a number"
  )
});
const Contact = props => {
  return (
    <Formik
      initialValues={initValues}
      validationSchema={InscriptionSchema}
      onSubmit={async ({ email, prenom, nom, country, address, phone }) => {
        await console.log(
          JSON.stringify(
            { email, prenom, nom, country, address, phone },
            null,
            2
          )
        );
        props.next();
      }}
    >
      <Box
        as={Form}
        width="100%"
        justifyContent="center"
        flex
        alignItems="center"
        flexDirection="column"
      >
        <h1>Fill below informations</h1>
        <BoxField>
          <Label required>E-mail:</Label>
          <Field className="input" type="email" name="email"></Field>
        </BoxField>
        <ErrorMessage name="email"></ErrorMessage>
        <BoxField>
          <Label required>Prenom:</Label>
          <Field type="text" name="prenom" className="input"></Field>
        </BoxField>
        <ErrorMessage name="prenom"></ErrorMessage>
        <BoxField>
          <Label required>Nom:</Label>

          <Field type="text" name="nom" className="input"></Field>
        </BoxField>
        <ErrorMessage name="nom"></ErrorMessage>
        <BoxField>
          <Label required>Country:</Label>
          <Field component="select" name="country" className="input">
            {country_list.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Field>
        </BoxField>
        <BoxField>
          <Label required>address:</Label>
          <Field type="text" name="address" className="input"></Field>
        </BoxField>
        <ErrorMessage name="address"></ErrorMessage>
        <BoxField>
          <Label required>University:</Label>
          <Field type="text" name="university" className="input"></Field>
        </BoxField>
        <ErrorMessage name="address"></ErrorMessage>
        <BoxField>
          <Label required>Phone:</Label>
          <Field type="tel" name="phone" className="input"></Field>
        </BoxField>
        <ErrorMessage name="phone"></ErrorMessage>
        <BoxField>
          <Label required>details:</Label>
          <Field
            component="textarea"
            name="university"
            className="input"
          ></Field>
        </BoxField>
        <BoxField
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="baseline"
        >
          <Field className="input" type="checkbox" name="licence"></Field>
          <p style={{ marginLeft: "16px" }}>I agree to the term of services.</p>
        </BoxField>
        <Button onClick={props.next} type="primary">
          Submit
        </Button>
      </Box>
    </Formik>
  );
};

const BoxField = props => (
  <Box
    flex
    flexDirection="column"
    alignItems="flex-start"
    marginBottom="24px"
    {...props}
  >
    {props.children}
  </Box>
);
const Label = styled.label`
  ${props =>
    props.required &&
    `&::before {
    display: inline-block;
    margin-right: 4px;
    color: #f5222d;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }`};
  margin-bottom: 8px;
`;
export default Contact;
