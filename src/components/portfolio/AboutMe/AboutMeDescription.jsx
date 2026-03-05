import { createSignal } from "solid-js";
import "./aboutMeDescription.css";
export function AboutMeDescription() {
    const [descriptionType,setDescriptionType]  = createSignal("professional")
    const toggle = () => {
        if (descriptionType() == "professional") setDescriptionType("unProfessional")
        else setDescriptionType("professional")
    }
    return <div class="aboutMe">
        { descriptionType() == "professional" && <p>I am a systems-focused Full Stack Engineer with 6+ years of experience building secure, scalable products in startup environments. My expertise spans distributed systems, encryption, and performance engineering.
        <br /><br />
I have implemented the Signal protocol from scratch, including post-quantum extensions, and built revenue-critical payment systems with redundant transactional safeguards. I engineered a custom ESC/POS printing utility that reduced billing latency from seconds to near-instant by operating below typical OS bottlenecks.
        <br /><br />
I have led a seven-person team, hired and mentored engineers, and worked directly with CEOs to shape product direction. I have pushed back against insecure decisions and owned production outages under real-world pressure.
        <br /><br />
I prioritize correctness first, maintainability second, and performance third. My goal is to ship systems that remain reliable under scale, evolving requirements, and operational stress.</p>}
        { descriptionType()=="unProfessional" && <p>Programming was never a career plan for me. It started as curiosity.
        <br /><br />
When I was ten, I discovered QBASIC. I did not fully understand what I was doing, but I was fascinated that I could type instructions and the computer would respond. It felt powerful. Soon I learned C, HTML, and CSS. At fourteen, I built my own text editor using Python and Tkinter. It was simple, but it changed how I saw myself. I realized I could build tools, not just use them.
        <br /><br />
I have always loved creating things, no matter the field or programming language. I sometimes joke that JavaScript feels fake and that languages like Go, C++, and Rust are more real. What I mean is that I enjoy understanding systems deeply. I like knowing what happens under the hood. If something is slow or unreliable, I want to know why. I have even written assembly for performance-critical parts of a project because I wanted full control and clarity.
        <br /><br />
As I grew professionally, curiosity became responsibility. Working in startups taught me that software is not just code. It affects real businesses and real people. When you build billing systems or payment applications, you are responsible for someone's money. When you implement encryption, you are responsible for someone's privacy. That changes how you think. You become careful. You think about edge cases. You think about failure.
        <br /><br />
I have disagreed with leadership when security was at risk. I have handled production outages and fixed infrastructure problems under pressure. I have seen systems operate under heavy load and felt proud when they remained stable. Those moments are emotional because they represent months of thinking, testing, and refining.
        <br /><br />
For me, engineering means solving real problems with the least waste and the highest integrity. It means listening to users and building what actually helps them. It means launching products that people can trust. It also means being honest about trade-offs and never hiding behind complexity.
        <br /><br />
I still enjoy good music. I still build things for fun. I still feel the same excitement I felt at ten years old, staring at a terminal and wondering what I could create next. The only difference now is that the systems are bigger and the responsibility is greater. That makes the work more serious, but also more meaningful.</p>}
        { descriptionType()=="unProfessional" && <p>Did you find that absurd, Congrats! It is.</p> }
        <div class="buttons">
            <button class="icon" onClick={toggle}>😒</button>
            <button >My Life Story</button>
        </div>
    </div>
}