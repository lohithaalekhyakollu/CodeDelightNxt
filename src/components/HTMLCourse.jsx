import { useState,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Sidebar from '../pages/Sidebar'
import Heading from '../pages/Heading'
import Introduction from '../pages/Introduction'
import "../styles/Sidebar.css"
import Basics from '../pages/Basics'
import Editors from '../pages/Editors'
import Elements from '../pages/Elements'
import Attributes from '../pages/Attributes'
import Headings from '../pages/Headings'
import Paragraphs from '../pages/Paragraphs'
import TextFormatting from '../pages/TextFormatting'
import Block_Inline from '../pages/Block_Inline'
import Lists from '../pages/Lists'
function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const showContent = (section) => setActiveSection(section);
  return (
    <div className="parent">
       <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        showContent={showContent}
       />
      <div className="main">
      <Heading openSidebar={openSidebar} />
      {activeSection === "introduction" && <Introduction showContent={showContent}/>}
      {activeSection === "basics" && <Basics showContent={showContent}/>}
      {activeSection === "editors" && <Editors showContent={showContent}/>}
      {activeSection === "elements" && <Elements showContent={showContent}/>}
      {activeSection === "attributes" && <Attributes showContent={showContent}/>}
      {activeSection === "block_inline" && <Block_Inline showContent={showContent}/>}
      {activeSection === "headings" && <Headings showContent={showContent}/>}
      {activeSection === "paragraphs" && <Paragraphs showContent={showContent}/>}
      {activeSection === "textformatting" && <TextFormatting showContent={showContent}/>}
      {activeSection === "lists" && <Lists showContent={showContent}/>}
      </div>
    </div>
  )
}

export default Component;
