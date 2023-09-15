import Tag from "../components/Tags";
import Heading from "../components/Headings";

export default function Html() {
  return (
    <div className="p-4 md:px-28 lg:px-44 lg:text-xl">
      <p className="font-bold text-center">
        <u>HTMl CheatSheet</u>
      </p>
      <p className="text-center">
        HTML(HyperText Markup Language) is the most basic building block of all
        web pages.It provides structure to the content appearing on a
        website,such as images,text,or videos by creating a basic skeleton.
      </p>

      {/* section on list items */}

      <section className="flex justify-around py-2 border-b-2 ">
        <ul>
          <a href="#headingtags">
            <li className="list-disc text-sky-600">Heading Tags</li>
          </a>
          <a href="#containertags">
            <li className="list-disc text-sky-600">Container Tags</li>
          </a>
          <a href="#documentinfo">
            <li className="list-disc text-sky-600">Document Infromation</li>
          </a>
          <a href="#tabletags">
            <li className="list-disc text-sky-600">Table Tags</li>
          </a>
          <a href="#formtags">
            <li className="list-disc text-sky-600">Form Tags</li>
          </a>
        </ul>
        <ul>
          <a href="#sectioningtags">
            <li className="list-disc text-sky-600">Sectioning Tags</li>
          </a>
          <a href="#listtags">
            <li className="list-disc text-sky-600">List Tags</li>
          </a>
          <a href="#multimediatags">
            <li className="list-disc text-sky-600">Multimedia Tags</li>
          </a>
          <a href="#attributes">
            <li className="list-disc text-sky-600">Attributes</li>
          </a>
        </ul>
      </section>

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
            &lt;<span className="font-semibold">meta</span> charset="UTF-8"/&gt;
            <br />
            &lt;<span className="font-semibold">title</span>&gt;
            <br />
            <span className="text-[#009647]">&lt;!--title goes here--&gt;</span>
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

      <section className="py-2 border-b-2">
        <div>
          <p>
            <span className="font-bold">
              <u>Body</u> :
            </span>{" "}
            The HTML<code> &lt;body&gt; </code> element represents th content of
            an HTML document.There can be only one &lt;body&gt; element in a
            document.
          </p>
          <code className="bg-slate-300 block text-center m-1">
            &lt;body&gt;...&lt;/body&gt;
          </code>
        </div>
      </section>

      {/* section of heading tags */}

      <section className="py-2 border-b-2" id="headingtags">
        <div>
          <Heading
            heading="Headings"
            headingDescription="There are six headings available in HTML."
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag
              name="h1"
              description="Used for title generally once per page and has a font size of 2em."
            />
            <Tag
              name="h2"
              description="Used for title generally once per page and has a font size of 1.5em."
            />
            <Tag
              name="h3"
              description="Used for title generally once per page and has a font size of 1.17em."
            />
            <Tag
              name="h4"
              description="Used for title generally once per page and has a font size of 1em."
            />
            <Tag
              name="h5"
              description="Used for title generally once per page and has a font size of 0.83em."
            />
            <Tag
              name="h6"
              description="Used for title generally once per page and has a font size of 0.67em."
            />
          </ul>
        </div>
      </section>

      {/* section for conatiner tags */}

      <section className="py-2 border-b-2" id="containertags">
        <div>
          <Heading
            heading="Container"
            headingDescription="The container tags are tags that have some data such as text,the
            image between their opening and closing tags.Th several container
            tags in HTML are:"
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag
              name="div"
              description="Block element that defines a division in HTMl document."
            />
            <Tag
              name="span"
              description="Inline element used to mark up a part of a text or document"
            />
            <Tag name="p" description="Used to represent a paragraph" />
            <Tag
              name="pre"
              description="Represent pre-formatted text to present xactly as written in the HTML file"
            />
            <Tag name="code" description="Used to represent source codes" />
          </ul>
        </div>
      </section>

      {/* Section of Document Information */}

      <section className="py-2 border-b-2" id="documentinfo">
        <div>
          <Heading
            heading="Document Information"
            headingDescription="This section invloves tags which are used to describe the HTML
            document by giving an overview of what it includes."
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag
              name="head"
              description="Container for metadata which is data about data"
            />
            <Tag
              name="link"
              description="Used to link external style sheets or documents"
            />
            <Tag
              name="meta"
              description="Defines metadata about HTML document."
            />
            <Tag name="title" description="Defines the document's title" />
            <Tag
              name="style"
              description="Used to define style information (CSS) for a document"
            />
          </ul>
        </div>
      </section>

      {/* Section for table tags */}

      <section className="py-2 border-b-2" id="tabletags">
        <div>
          <Heading
            heading="Tables"
            headingDescription="Arranges data in tabular form"
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag name="caption" description="Specifies caption of a table." />
            <Tag
              name="table"
              description="Represents data in a two-dimwnsional table."
            />
            <Tag
              name="thead"
              description="Used to group header content in HTML table."
            />
            <Tag
              name="tbody"
              description="Used to group primary content of an HTML table."
            />
            <Tag
              name="th"
              description="Defines a cell as header of a group of cells of the table."
            />
            <Tag name="td" description="Defines a cell of a table." />
            <Tag name="tr" description="Defines a row in an HTML table." />
            <Tag
              name="tfoot"
              description="Defines a set of rows summarizing the columns of the table."
            />
          </ul>
        </div>
      </section>

      {/* Section for Form tags */}

      <section className="py-2 border-b-2" id="formtags">
        <div>
          <Heading
            heading="Forms"
            headingDescription="An HTML form is a section of a document that acts as a container for
            different types of input elements,such as text
            fields,passwords,menus,checkboxes,radio buttons,submit buttons etc."
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag
              name="form"
              description="Represents a section containing controls for submitting information."
            />
            <Tag
              name="input"
              description="Creates intractive controls for forms in order to accept data."
            />
            <Tag
              name="textarea"
              description="Creates a multi-line plain-text editing control."
            />
            <Tag
              name="select"
              description="Provides a menu of options to slect from."
            />
            <Tag
              name="option"
              description="Defines a option in a select list."
            />
            <Tag
              name="optgroup"
              description="Creates a grouping of options within a <select> element."
            />
            <Tag
              name="progress"
              description="Displays an indicator showing the degree of completion of a task"
            />
            <Tag
              name="datalist"
              description="Used to give a predefined options for an <input> element and adds an autocomplete feature to it"
            />
            <Tag name="button" description="Represent a clickable button" />
            <Tag
              name="lable"
              description="Specifies a lable for an <input> element."
            />
          </ul>
        </div>
      </section>

      {/* Section for sectioning content */}

      <section className="py-2 border-b-2" id="sectioningtags">
        <div>
          <Heading
            heading="Sectioning Content"
            headingDescription="Sectioning Content elements by default define ARIA landmark.These elements are mostly descendent of the HTML body element"
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag
              name="header"
              description="Used to give introductory content about the document"
            />
            <Tag
              name="main"
              description="Reprsents the main dominant content of the document"
            />
            <Tag
              name="section"
              description="Structural HTML element used to group together related elements."
            />
            <Tag
              name="nav"
              description="Represents a section of a page to provide navigation links."
            />
            <Tag
              name="article"
              description="Represents a self-contained composition which is independently distributable or reusable"
            />
            <Tag
              name="aside"
              description="Defines some content aside from the content it is placed in."
            />
            <Tag
              name="footer"
              description="Represents a footer for its sectioning root element"
            />
            <Tag
              name="address"
              description="Provide contact information for a person,people,or an organization"
            />
          </ul>
        </div>
      </section>

      {/* Section for list tags */}
      <section className="py-2 border-b-2" id="listtags">
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
                <span className="font-semibold">Description list</span> Used to
                display name/value pairs such as terms and definations.
              </p>
            </li>
          </ul>
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag
              name="ul"
              description="Respresents an unodered list of items."
            />
            <Tag name="ol" description="Represents an ordered list of items" />
            <Tag name="li" description="Represents an item in a list" />
            <Tag name="dl" description="Represents a description list" />
            <Tag
              name="dd"
              description="Used to describe a term/name in a description list"
            />
            <Tag name="dt" description="Specifies a term in a description" />
          </ul>
        </div>
      </section>

      {/* Section for multimedia tags  */}

      <section className="py-2 border-b-2" id="multimediatags">
        <div>
          <Heading
            heading="Multimedia Tags"
            headingDescription="Multimedia is anything you can hear or see in the form of images,vedios or sounds.It comes in various format.HTML helps you to add multimedia files to your website"
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <Tag name="img" description="Used to link images to web pages." />
            <Tag
              name="audio"
              description="Used to include sound content in documents."
            />
            <Tag
              name="video"
              description="Embeds a media playr which supports video files in the document."
            />
            <Tag
              name="figure"
              description="Groups various diagrams,images,illustrations and code snippets into the document."
            />
            <Tag
              name="figcaption"
              description="Used to provide the caption of the content."
            />
            <Tag
              name="embed"
              description="Embds multimedia in a web page includes objects such as images,audios and videos."
            />
            <Tag
              name="object"
              description="Protable Document Format(PDF) in a web page."
            />
          </ul>
        </div>
      </section>

      {/* Section for attributes */}

      <section className="py-2 border-b-2" id="attributes">
        <div>
          <Heading
            heading="Attributes"
            headingDescription="HTML attributes are special words used to define the characteristics of an HTML element.Attributes have two parts - the name and the value.The name is the property you want to set and the value is the desired value of the attribute."
          />
          <ul className="p-4 md:px-8 lg:px-12">
            <li className="list-disc py-2">
              <p className="font-semibold">alt</p>
              <p>
                Used in the image tag to specify the alternative text of the
                image
              </p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name alt="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">href</p>
              <p>Used to define a hyperlink.</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name href="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">src</p>
              <p>Specifies URL of the image to be used.</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name src="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">width</p>
              <p>Specifies the width of the image in pixel</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name width="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">height</p>
              <p>Specifies the height of the image in pixel</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name height="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">style</p>
              <p>Helps to change the look and feel of the document.</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name style="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">id</p>
              <p>Unique identifier usd to specify an area of a webpage</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name id="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">class</p>
              <p>Spcifies one or more class names for an element.</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name class="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">title</p>
              <p>Specifies extra information about an element.</p>
              <code className="bg-slate-300 block text-center m-1">
                &lt;tag_name title="..."&gt;
              </code>
            </li>
            <li className="list-disc py-2">
              <p className="font-semibold">Placeholder</p>
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
  );
}
