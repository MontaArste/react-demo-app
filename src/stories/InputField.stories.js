import InputField from "../components/InputField"

export default {
    title: "Input Field",
    component: InputField,
}

const Template = args => <InputField {...args}/>

export const Default = Template.bind({})
Default.args = {
    label: "How old are you?",
    placeholder: 0,
    backgroundColor: "white"
}

export const Password = Template.bind({})
Password.args = {
    label: "Your password",
    backgroundColor: "white"
}