import Button from "../components/Button"

// Ko renderes - ar nosaukumu Button renderes komponentu Button.
export default {
    title: "Button",
    component: Button,
}

const Template = args => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    backgroundColor: "white",
    label: "Press Me",
    size: "md",
    color: "black",
    border: "solid 2px black"
}
// Story "Red". This put story RED in Button component folder.
//export const Red = () => <Button label="Press me" backgroundColor="red"/>

export const Yellow = Template.bind({})
Yellow.args = {
    backgroundColor: "yellow",
    label: "Press Me",
    size: "lg",
    color: "#362709",
}