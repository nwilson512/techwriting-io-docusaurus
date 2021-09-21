import React from "react"
import JSONData from "../data/resumeconfig.json"

const experience = JSONData.experience_section;
const education = JSONData.education_section;
const skills = JSONData.skills_section;

export default function resumeRenderAll() {
    return(
        <div>
            <h1>
                {experience.experience_section_name}
            </h1>
            <ul>
                {/* need some sort of for loop here */}
            </ul>
            <h1>
                {education.education_section_name}
            </h1>
            <ul>
                {/* need some sort of for loop here */}
            </ul>
            <h1>
                {skills.skills_section_name}
            </h1>
            <ul>
                {/* need some sort of for loop here */}
            </ul>
        </div>
    )
}






// const YAMLbuildtime = () => (
//   <div>
//     <h1>{parsedYAML.title}</h1>
//     {/* <ul>
//       {YAMLData.content.map((data, index) => {
//         return <li key={`content_item_${index}`}>{data.item}</li>
//       })}
//     </ul> */}
//   </div>
// )
// export default YAMLbuildtime


// <h1>{{ page.title }}</h1> <!-- pulls page title -->
// {{ content }} <!-- draws all page content after the frontmatter -->
// <div class="flex"> <!-- wraps entire experience section -->
//   <!-- iterate through the 'experience_section' multidimensional array -->
//   <h2 class="mr-12">{{ site.data.resumeconfig.experience_section.experience_section_name }}</h2> <!-- draw the experience section name at this level of the array -->
//   <div class="experience"> <!-- wraps all experience listings -->
//      {% for item in site.data.resumeconfig.experience_section.subsection %}
//     <div class="resume-section-content"> <!-- wraps each company -->
//       <h3 class="company"> {{ item.subsection_name }}</h3>
//       <div class="book"> <!-- wraps each job -->
//         <h4 class="job-title"> {{ item.job_title}} </h4>
//         <p class="tenure"> {{ item.tenure}} </p>
//         {% for entry in item.focus_area %}
//         <div class=""> <!-- wraps each experience subsection -->
//           <h4 class="focus-area">{{ entry.focus_area_name }}</h4>
//           <ul class="resume-list">
//             {% for value in entry.focus_area_list %}
//             <li>
//               {{ value }}
//             </li>
//             {% endfor %}
//           </ul>
//       </div> <!-- wraps each experience subsection -->
//       {% endfor %}
//     </div> <!-- wraps each job -->
//   </div> <!-- wraps each company -->
//   {% endfor %}
// </div> <!--wraps all experience listings-->