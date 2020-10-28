import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Messages from "../container/messages"
import Conversations from '../container/conversations'
import Texting from '../components/texting'

const IndexPage = () => (
  <Layout>
    <SEO title="Reach HomePage"/>
    <Messages/>
    <Conversations/>
    <Texting/>
  </Layout>
)

export default IndexPage
