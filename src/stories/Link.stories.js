import Link from "../components/Link"

export default {
    title: "Link",
    component: Link,
}

const Template = args => <Link {...args}/>

export const Default = Template.bind({})
Default.args = {
    label: "Press the link below",
    href: "www.apollo.lv",
    color: "blue",
    textDecoration: "none",
}
