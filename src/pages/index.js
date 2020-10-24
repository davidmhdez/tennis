import React from "react"
import Helmets from "../components/Helmets"
import Layout from "../components/Layout"
import Homepage from "../views/Homepage"

const IndexPage = () => (
  <Layout>
    <Helmets/>
    <Homepage/>
  </Layout>
)

export default IndexPage
