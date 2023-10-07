import Tag from "../components/Tags";
import Heading from "../components/Headings";
import Sidebar from "../components/sidebar";
import TopBtn from "../components/Topbtn";

export default function Html() {
  return (
    <div className="relative flex mt-16 ">
      <Sidebar title="HTML">
        <details>
          <summary className="text-lg cursor-pointer">Heading Tags</summary>
          <div className="px-6">
            <a href="#h1">
              <li className=" text-sky-600 ">&lt;h1&gt;</li>
            </a>
            <a href="#h2">
              <li className=" text-sky-600 ">&lt;h2&gt;</li>
            </a>
            <a href="#h3">
              <li className=" text-sky-600 ">&lt;h3&gt;</li>
            </a>
            <a href="#h4">
              <li className=" text-sky-600 ">&lt;h4&gt;</li>
            </a>
            <a href="#h5">
              <li className=" text-sky-600 ">&lt;h5&gt;</li>
            </a>
            <a href="#h6">
              <li className=" text-sky-600 ">&lt;h6&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">Container Tags</summary>
          <div className="px-8">
            <a href="#div">
              <li className=" text-sky-600 ">&lt;div&gt;</li>
            </a>
            <a href="#span">
              <li className=" text-sky-600 ">&lt;span&gt;</li>
            </a>
            <a href="#p">
              <li className=" text-sky-600 ">&lt;p&gt;</li>
            </a>
            <a href="#pre">
              <li className=" text-sky-600 ">&lt;pre&gt;</li>
            </a>
            <a href="#code">
              <li className=" text-sky-600 ">&lt;code&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">
            Document Information
          </summary>
          <div className="px-8">
            <a href="#head">
              <li className=" text-sky-600 ">&lt;head&gt;</li>
            </a>
            <a href="#link">
              <li className=" text-sky-600 ">&lt;link&gt;</li>
            </a>
            <a href="#meta">
              <li className=" text-sky-600 ">&lt;meta&gt;</li>
            </a>
            <a href="#title">
              <li className=" text-sky-600 ">&lt;title&gt;</li>
            </a>
            <a href="#style">
              <li className=" text-sky-600 ">&lt;style&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">Table Tags</summary>
          <div className="px-8">
            <a href="#caption">
              <li className=" text-sky-600 ">&lt;caption&gt;</li>
            </a>
            <a href="#table">
              <li className=" text-sky-600 ">&lt;table&gt;</li>
            </a>
            <a href="#thead">
              <li className=" text-sky-600 ">&lt;thead&gt;</li>
            </a>
            <a href="#tbody">
              <li className=" text-sky-600 ">&lt;tbody&gt;</li>
            </a>
            <a href="#th">
              <li className=" text-sky-600 ">&lt;th&gt;</li>
            </a>
            <a href="#td">
              <li className=" text-sky-600 ">&lt;td&gt;</li>
            </a>
            <a href="#tr">
              <li className=" text-sky-600 ">&lt;tr&gt;</li>
            </a>
            <a href="#tfoot">
              <li className=" text-sky-600 ">&lt;tfoot&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">Form Tags</summary>
          <div className="px-8">
            <a href="#form">
              <li className=" text-sky-600 ">&lt;form&gt;</li>
            </a>
            <a href="#input">
              <li className=" text-sky-600 ">&lt;input&gt;</li>
            </a>
            <a href="#textarea">
              <li className=" text-sky-600 ">&lt;textarea&gt;</li>
            </a>
            <a href="#select">
              <li className=" text-sky-600 ">&lt;select&gt;</li>
            </a>
            <a href="#option">
              <li className=" text-sky-600 ">&lt;option&gt;</li>
            </a>
            <a href="#optgroup">
              <li className=" text-sky-600 ">&lt;optgroup&gt;</li>
            </a>
            <a href="#progress">
              <li className=" text-sky-600 ">&lt;progress&gt;</li>
            </a>
            <a href="#datalist">
              <li className=" text-sky-600 ">&lt;datalist&gt;</li>
            </a>
            <a href="#button">
              <li className=" text-sky-600 ">&lt;button&gt;</li>
            </a>
            <a href="#label">
              <li className=" text-sky-600 ">&lt;label&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lgcursor-pointer">Sectioning Tags</summary>
          <div className="px-8">
            <a href="#header">
              <li className=" text-sky-600 ">&lt;header&gt;</li>
            </a>
            <a href="#main">
              <li className=" text-sky-600 ">&lt;main&gt;</li>
            </a>
            <a href="#section">
              <li className=" text-sky-600 ">&lt;section&gt;</li>
            </a>
            <a href="#nav">
              <li className=" text-sky-600 ">&lt;nav&gt;</li>
            </a>
            <a href="#article">
              <li className=" text-sky-600 ">&lt;article&gt;</li>
            </a>
            <a href="#aside">
              <li className=" text-sky-600 ">&lt;aside&gt;</li>
            </a>
            <a href="#footer">
              <li className=" text-sky-600 ">&lt;footer&gt;</li>
            </a>
            <a href="#address">
              <li className=" text-sky-600 ">&lt;address&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">List Tags</summary>
          <div className="px-8">
            <a href="#ul">
              <li className=" text-sky-600 ">&lt;ul&gt;</li>
            </a>
            <a href="#ol">
              <li className=" text-sky-600 ">&lt;ol&gt;</li>
            </a>
            <a href="#li">
              <li className=" text-sky-600 ">&lt;li&gt;</li>
            </a>
            <a href="#dl">
              <li className=" text-sky-600 ">&lt;dl&gt;</li>
            </a>
            <a href="#dd">
              <li className=" text-sky-600 ">&lt;dd&gt;</li>
            </a>
            <a href="#dt">
              <li className=" text-sky-600 ">&lt;dt&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">Multimedia Tags</summary>
          <div className="px-8">
            <a href="#img">
              <li className=" text-sky-600 ">&lt;img&gt;</li>
            </a>
            <a href="#audio">
              <li className=" text-sky-600 ">&lt;audio&gt;</li>
            </a>
            <a href="#video">
              <li className=" text-sky-600 ">&lt;video&gt;</li>
            </a>
            <a href="#figure">
              <li className=" text-sky-600 ">&lt;figure&gt;</li>
            </a>
            <a href="#figcaption">
              <li className=" text-sky-600 ">&lt;figcaption&gt;</li>
            </a>
            <a href="#embed">
              <li className=" text-sky-600 ">&lt;embed&gt;</li>
            </a>
            <a href="#object">
              <li className=" text-sky-600 ">&lt;object&gt;</li>
            </a>
          </div>
        </details>

        <details>
          <summary className="text-lg cursor-pointer">Attributes</summary>
          <div className="px-8">
            <a href="#alt">
              <li className=" text-sky-600 ">&lt;alt&gt;</li>
            </a>
            <a href="#href">
              <li className=" text-sky-600 ">&lt;href&gt;</li>
            </a>
            <a href="#src">
              <li className=" text-sky-600 ">&lt;src&gt;</li>
            </a>
            <a href="#width">
              <li className=" text-sky-600 ">&lt;width&gt;</li>
            </a>
            <a href="#height">
              <li className=" text-sky-600 ">&lt;height&gt;</li>
            </a>
            <a href="#style">
              <li className=" text-sky-600 ">&lt;style&gt;</li>
            </a>
            <a href="#id">
              <li className=" text-sky-600 ">&lt;id&gt;</li>
            </a>
            <a href="#class">
              <li className=" text-sky-600 ">&lt;class&gt;</li>
            </a>
            <a href="#title">
              <li className=" text-sky-600 ">&lt;title&gt;</li>
            </a>
            <a href="#placeholder">
              <li className=" text-sky-600 ">&lt;placeholder&gt;</li>
            </a>
          </div>
        </details>
      </Sidebar>

      <div className=" lg:text-xl py-4 md:px-20 px-4 overflow-scroll">
        <p className="font-bold text-center p-1">
          <u>HTML CheatSheet</u>
        </p>
        <p className="text-center">
          HTML(HyperText Markup Language) is the most basic building block of
          all web pages.It provides structure to the content appearing on a
          website,such as images,text,or videos by creating a basic skeleton.
        </p>
        {/* section for main root */}

        <section className="py-2 border-b-2">
          <div>
            <p>
              <span className="font-bold">
                <u>Main root</u> :
              </span>
              The <code> &lt;html&gt; </code>element represents the root(top)
              level element of an HTML document also called the document
              element.All other elements must be descendants of this element.
            </p>
            <code className="bg-slate-300 block text-center m-1">
              &lt;html&gt;...&lt;/html&gt;
            </code>
          </div>
        </section>

        {/* section for boilerplate */}

        <section className="py-2 border-b-2">
          <p className="font-bold">
            <u>Boilerplate</u> :
          </p>
          <div className="py-2">
            <code>
              &lt;!DOCTYPE html&gt;
              <br />
              &lt;<span className="font-semibold">html</span> lang="en"&gt;
              <br />
              &lt;<span className="font-semibold">head</span>&gt;
              <br />
              <span className="text-[#009647]">
                {" "}
                &lt;!--Description of the document--&gt;
              </span>
              <br />
              &lt;<span className="font-semibold">meta</span>{" "}
              charset="UTF-8"/&gt;
              <br />
              &lt;<span className="font-semibold">title</span>&gt;
              <br />
              <span className="text-[#009647]">
                &lt;!--title goes here--&gt;
              </span>
              <br />
              The Cheatsheet Vault
              <br />
              &lt;<span className="font-semibold">/title</span>&gt;
              <br />
              &lt;<span className="font-semibold">/head</span>&gt;
              <br />
              &lt;<span className="font-semibold">body</span>&gt;
              <br />
              <span className="text-[#009647]">
                &lt;!--your content goes here--&gt;
              </span>
              <br />
              Welcome to the dark side
              <br />
              &lt;<span className="font-semibold">/body</span>&gt;
              <br />
              &lt;<span className="font-semibold">/html</span>&gt;
            </code>
          </div>
        </section>

        {/* section for basic template */}

        <section className="py-4 border-b-2">
          <div>
            <p>
              <span className="font-bold">
                <u>Body</u> :
              </span>{" "}
              The HTML<code> &lt;body&gt; </code> element represents th content
              of an HTML document.There can be only one &lt;body&gt; element in
              a document.
            </p>
            <code className="bg-slate-300 block text-center m-1">
              &lt;body&gt;...&lt;/body&gt;
            </code>
          </div>
        </section>

        {/* section of heading tags */}

        <section className="py-2 border-b-2 scroll-mt-20" id="headingtags">
          <div>
            <Heading
              heading="Headings"
              headingDescription="There are six headings available in HTML."
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="h1" />
              <Tag
                name="h1"
                description="Used for title generally once per page and has a font size of 2em."
              />
              <span className="scroll-mt-20" id="h2" />
              <Tag
                name="h2"
                description="Used for title generally once per page and has a font size of 1.5em."
              />
              <span className="scroll-mt-20" id="h3" />
              <Tag
                name="h3"
                description="Used for title generally once per page and has a font size of 1.17em."
              />
              <span className="scroll-mt-20" id="h4" />
              <Tag
                name="h4"
                description="Used for title generally once per page and has a font size of 1em."
              />
              <span className="scroll-mt-20" id="h5" />
              <Tag
                name="h5"
                description="Used for title generally once per page and has a font size of 0.83em."
              />
              <span className="scroll-mt-20" id="h6" />
              <Tag
                name="h6"
                description="Used for title generally once per page and has a font size of 0.67em."
              />
            </ul>
          </div>
        </section>

        {/* section for conatiner tags */}

        <section className="py-2 border-b-2 scroll-mt-20" id="containertags">
          <div>
            <Heading
              heading="Container"
              headingDescription="The container tags are tags that have some data such as text,the
            image between their opening and closing tags.Th several container
            tags in HTML are:"
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="div" />
              <Tag
                name="div"
                description="Block element that defines a division in HTMl document."
              />
              <span className="scroll-mt-20" id="span" />
              <Tag
                name="span"
                description="Inline element used to mark up a part of a text or document"
              />
              <span className="scroll-mt-20" id="p" />
              <Tag name="p" description="Used to represent a paragraph" />
              <span className="scroll-mt-20" id="pre" />
              <Tag
                name="pre"
                description="Represent pre-formatted text to present xactly as written in the HTML file"
              />
              <span className="scroll-mt-20" id="code" />
              <Tag name="code" description="Used to represent source codes" />
            </ul>
          </div>
        </section>

        {/* Section of Document Information */}

        <section className="py-2 border-b-2 scroll-mt-20" id="documentinfo">
          <div>
            <Heading
              heading="Document Information"
              headingDescription="This section invloves tags which are used to describe the HTML
            document by giving an overview of what it includes."
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="head" />
              <Tag
                name="head"
                description="Container for metadata which is data about data"
              />
              <span className="scroll-mt-20" id="link" />
              <Tag
                name="link"
                description="Used to link external style sheets or documents"
              />
              <span className="scroll-mt-20" id="meta" />
              <Tag
                name="meta"
                description="Defines metadata about HTML document."
              />
              <span className="scroll-mt-20" id="title" />
              <Tag name="title" description="Defines the document's title" />
              <span className="scroll-mt-20" id="style" />
              <Tag
                name="style"
                description="Used to define style information (CSS) for a document"
              />
            </ul>
          </div>
        </section>

        {/* Section for table tags */}

        <section className="py-2 border-b-2 scroll-mt-20" id="tabletags">
          <div>
            <Heading
              heading="Tables"
              headingDescription="Arranges data in tabular form"
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="caption" />
              <Tag name="caption" description="Specifies caption of a table." />
              <span className="scroll-mt-20" id="table" />
              <Tag
                name="table"
                description="Represents data in a two-dimwnsional table."
              />
              <span className="scroll-mt-20" id="thead" />
              <Tag
                name="thead"
                description="Used to group header content in HTML table."
              />
              <span className="scroll-mt-20" id="tbody" />
              <Tag
                name="tbody"
                description="Used to group primary content of an HTML table."
              />
              <span className="scroll-mt-20" id="th" />
              <Tag
                name="th"
                description="Defines a cell as header of a group of cells of the table."
              />
              <span className="scroll-mt-20" id="td" />
              <Tag name="td" description="Defines a cell of a table." />
              <span className="scroll-mt-20" id="tr" />
              <Tag name="tr" description="Defines a row in an HTML table." />
              <span className="scroll-mt-20" id="tfoot" />
              <Tag
                name="tfoot"
                description="Defines a set of rows summarizing the columns of the table."
              />
            </ul>
          </div>
        </section>

        {/* Section for Form tags */}

        <section className="py-2 border-b-2 scroll-mt-20" id="formtags">
          <div>
            <Heading
              heading="Forms"
              headingDescription="An HTML form is a section of a document that acts as a container for
            different types of input elements,such as text
            fields,passwords,menus,checkboxes,radio buttons,submit buttons etc."
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="form" />
              <Tag
                name="form"
                description="Represents a section containing controls for submitting information."
              />
              <span className="scroll-mt-20" id="input" />
              <Tag
                name="input"
                description="Creates intractive controls for forms in order to accept data."
              />
              <span className="scroll-mt-20" id="textarea" />
              <Tag
                name="textarea"
                description="Creates a multi-line plain-text editing control."
              />
              <span className="scroll-mt-20" id="select" />
              <Tag
                name="select"
                description="Provides a menu of options to slect from."
              />
              <span className="scroll-mt-20" id="option" />
              <Tag
                name="option"
                description="Defines a option in a select list."
              />
              <span className="scroll-mt-20" id="optgroup" />
              <Tag
                name="optgroup"
                description="Creates a grouping of options within a <select> element."
              />
              <span className="scroll-mt-20" id="progress" />
              <Tag
                name="progress"
                description="Displays an indicator showing the degree of completion of a task"
              />
              <span className="scroll-mt-20" id="datalist" />
              <Tag
                name="datalist"
                description="Used to give a predefined options for an <input> element and adds an autocomplete feature to it"
              />
              <span className="scroll-mt-20" id="button" />
              <Tag name="button" description="Represent a clickable button" />
              <span className="scroll-mt-20" id="label" />
              <Tag
                name="label"
                description="Specifies a label for an <input> element."
              />
            </ul>
          </div>
        </section>

        {/* Section for sectioning content */}

        <section className="py-2 border-b-2 scroll-mt-20" id="sectioningtags">
          <div>
            <Heading
              heading="Sectioning Content"
              headingDescription="Sectioning Content elements by default define ARIA landmark.These elements are mostly descendent of the HTML body element"
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="header" />
              <Tag
                name="header"
                description="Used to give introductory content about the document"
              />
              <span className="scroll-mt-20" id="main" />
              <Tag
                name="main"
                description="Reprsents the main dominant content of the document"
              />
              <span className="scroll-mt-20" id="section" />
              <Tag
                name="section"
                description="Structural HTML element used to group together related elements."
              />
              <span className="scroll-mt-20" id="nav" />
              <Tag
                name="nav"
                description="Represents a section of a page to provide navigation links."
              />
              <span className="scroll-mt-20" id="article" />
              <Tag
                name="article"
                description="Represents a self-contained composition which is independently distributable or reusable"
              />
              <span className="scroll-mt-20" id="aside" />
              <Tag
                name="aside"
                description="Defines some content aside from the content it is placed in."
              />
              <span className="scroll-mt-20" id="footer" />
              <Tag
                name="footer"
                description="Represents a footer for its sectioning root element"
              />
              <span className="scroll-mt-20" id="address" />
              <Tag
                name="address"
                description="Provide contact information for a person,people,or an organization"
              />
            </ul>
          </div>
        </section>

        {/* Section for list tags */}
        <section className="py-2 border-b-2 scroll-mt-20" id="listtags">
          <div>
            <Heading
              heading="Lists"
              headingDescription="Lists can be either numerical,alphabetic,bullet or other symbols.You can specify list type and list items in HTML for the clean document.There are three list types in HTMl :"
            />
            <ul className="px-4 border-4">
              <li className="list-disc py-2">
                <p>
                  <span className="font-semibold">Unordered list:</span> Used to
                  group a set of related items in no particular order.
                </p>
              </li>
              <li className="list-disc py-2">
                <p>
                  <span className="font-semibold">Ordered list:</span> Used to
                  group a set of related items in a specific order.
                </p>
              </li>
              <li className="list-disc py-2">
                <p>
                  <span className="font-semibold">Description list</span> Used
                  to display name/value pairs such as terms and definations.
                </p>
              </li>
            </ul>
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="ul" />
              <Tag
                name="ul"
                description="Respresents an unodered list of items."
              />
              <span className="scroll-mt-20" id="ol" />
              <Tag
                name="ol"
                description="Represents an ordered list of items"
              />
              <span className="scroll-mt-20" id="li" />
              <Tag name="li" description="Represents an item in a list" />
              <span className="scroll-mt-20" id="dl" />
              <Tag name="dl" description="Represents a description list" />
              <span className="scroll-mt-20" id="dd" />
              <Tag
                name="dd"
                description="Used to describe a term/name in a description list"
              />
              <span className="scroll-mt-20" id="dt" />
              <Tag name="dt" description="Specifies a term in a description" />
            </ul>
          </div>
        </section>

        {/* Section for multimedia tags  */}

        <section className="py-2 border-b-2 scroll-mt-20" id="multimediatags">
          <div>
            <Heading
              heading="Multimedia Tags"
              headingDescription="Multimedia is anything you can hear or see in the form of images,vedios or sounds.It comes in various format.HTML helps you to add multimedia files to your website"
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <span className="scroll-mt-20" id="img" />
              <Tag name="img" description="Used to link images to web pages." />
              <span className="scroll-mt-20" id="audio" />
              <Tag
                name="audio"
                description="Used to include sound content in documents."
              />
              <span className="scroll-mt-20" id="video" />
              <Tag
                name="video"
                description="Embeds a media playr which supports video files in the document."
              />
              <span className="scroll-mt-20" id="figure" />
              <Tag
                name="figure"
                description="Groups various diagrams,images,illustrations and code snippets into the document."
              />
              <span className="scroll-mt-20" id="figcaption" />
              <Tag
                name="figcaption"
                description="Used to provide the caption of the content."
              />
              <span className="scroll-mt-20" id="embed" />
              <Tag
                name="embed"
                description="Embds multimedia in a web page includes objects such as images,audios and videos."
              />
              <span className="scroll-mt-20" id="object" />
              <Tag
                name="object"
                description="Protable Document Format(PDF) in a web page."
              />
            </ul>
          </div>
        </section>

        {/* Section for attributes */}

        <section className="py-2 scroll-mt-20" id="attributes">
          <div>
            <Heading
              heading="Attributes"
              headingDescription="HTML attributes are special words used to define the characteristics of an HTML element.Attributes have two parts - the name and the value.The name is the property you want to set and the value is the desired value of the attribute."
            />
            <ul className="p-4 md:px-8 lg:px-12">
              <li className="list-disc py-2" id="alt">
                <p className="font-semibold">alt</p>
                <p>
                  Used in the image tag to specify the alternative text of the
                  image
                </p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name alt="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="href">
                <p className="font-semibold">href</p>
                <p>Used to define a hyperlink.</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name href="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="src">
                <p className="font-semibold">src</p>
                <p>Specifies URL of the image to be used.</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name src="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="width">
                <p className="font-semibold">width</p>
                <p>Specifies the width of the image in pixel</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name width="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="height">
                <p className="font-semibold">height</p>
                <p>Specifies the height of the image in pixel</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name height="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="style">
                <p className="font-semibold">style</p>
                <p>Helps to change the look and feel of the document.</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name style="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="id">
                <p className="font-semibold">id</p>
                <p>Unique identifier usd to specify an area of a webpage</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name id="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="class">
                <p className="font-semibold">class</p>
                <p>Spcifies one or more class names for an element.</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name class="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="title">
                <p className="font-semibold">title</p>
                <p>Specifies extra information about an element.</p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name title="..."&gt;
                </code>
              </li>
              <li className="list-disc py-2" id="placeholder">
                <p className="font-semibold">placeholder</p>
                <p>
                  Specifies a short hint that describes the expected value of an
                  input field/text area.
                </p>
                <code className="bg-slate-300 block text-center m-1">
                  &lt;tag_name placeholder="..."&gt;
                </code>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <TopBtn />
    </div>
  );
}
