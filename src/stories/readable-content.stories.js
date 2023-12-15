import ReadableContent from '../templates/post/readable-content/index.vue';

export default {
  title: 'Blocks/Article/Readable Content',
  component: ReadableContent,
  tags: ['autodocs'],
  argsType: {}
}

const Template = (args) => ({
  components: { ReadableContent },
  setup() {
    return { args }
  },
  template: `<ReadableContent>
                <p>Web Application Firewall (or WAF) is a key component in web application security. However, not all WAFs are alike. As cyber attacks and applications become more complex, WAFs need to keep up with this advancement using more sophisticated, efficient, and high-performance protection techniques.</p>
                <p>With the growing number of zero-day attack events, discussions around the blocking methods used in Web Application Firewalls (WAFs) have become increasingly important. These discussions are a critical factor for companies seeking to implement a cybersecurity solution. This post aims to clarify the differences between the two currently used WAF types: those based on <strong>signatures</strong> (also referred to as <strong>vaccines</strong>) and those based on <strong>scoring</strong>.</p>
                <h2 id="what-are-the-differences-between-signature-based-and-scoring-based-blocking-methods">What are the differences between signature-based and scoring-based blocking methods?</h2>
                <p>All Web Application Firewalls (WAFs) are created to stop malicious online traffic, but they do it in different ways. Signature-based WAFs operate by drawing on databases of known attack patterns, referred to as ‘vaccines’, to ward off recognized threats. On the other hand, scoring-based WAFs use basic sets of rules to spot and block both familiar and unfamiliar threats, adjusting their response according to the selected level of sensitivity. The following sections provide an in-depth explanation of how each method works.</p>
                <h3 id="signature-based-waf">Signature-Based WAF</h3>
                <p>Signature-based WAFs utilize information from past attacks to identify and filter traffic that matches these already-known patterns of attack. When a new kind of attack is identified, cybersecurity providers generate a unique identifier—a signature—that captures elements of the attack pattern. This signature is then incorporated into the WAF. As new requests come in, the WAF can compare them against this database of signatures. If a match is found, the system can either block the request completely or generate an alert to bring attention to the suspicious activity.</p>
                <h3 id="scoring-based-waf">Scoring-Based WAF</h3>
                <p>Signature-based security strategies have long been the standard for firewalls and antivirus software. However, modern WAFs have been designed to bypass the limitations, including performance issues and usability concerns, typically associated with these signature lists. This is achieved by replacing the signature lists with smart rule sets.</p>
                <p>These rules leverage algorithms that sift through and analyze the structure of a wide array of attack patterns. These are then simplified into a basic set of guidelines. For example, dictionary operators are used for SQL injection attacks. When a rule is triggered—say a specific word like UNION, INSERT, or TABLE is used, it increases the ‘score’ or total points for that request. If the accrued score for a particular request exceeds a set limit, which can be adjusted based on the preferred level of sensitivity, that request will be blocked.</p>
                <h2 id="how-does-the-signature-based-method-impact-a-wafs-performance">How Does the Signature-Based Method Impact a WAF’s Performance?</h2>
                <p>A significant consideration is that a signature-based WAF needs frequent updates to remain effective. These updates often produce thousands of signatures, each of which must be compared with each new incoming request. This process requires heavy resource use and can lead to a decrease in performance speed as the volume of requests continues to be processed.</p>
                <p>Moreover, the rationale for negative security models, which permit access by default, does not align with modern cybersecurity strategies such as the Zero Trust and others. These contemporary approaches opt to block access as the default action, not grant it. This discrepancy also results in a high rate of false negatives with signature-based WAFs, unless a threat precisely matches the WAF’s predetermined malicious behavior patterns.</p>
                <p><a href="https://www.researchgate.net/profile/Wiem_Tounsi/publication/320027747_A_survey_on_technical_threat_intelligence_in_the_age_of_sophisticated_cyber_attacks/links/59fc7cb70f7e9b9968bd9e02/A-survey-on-technical-threat-intelligence-in-the-age-of-sophisticated-cyber-attacks.pdf"><u>A threat intelligence study</u></a> conducted by the computer and security journal Elsevier echoed this concern, noting that traditional WAF solutions and other security measures that rely “heavily on static pattern-identification technology based on lists or malware signatures” make digital content “extremely vulnerable to constantly evolving threats that exploit unknown and zero-day vulnerabilities.”</p>
                <p>Considering all the factors mentioned above, it’s clear that this method of blocking leaves applications more susceptible to emerging threats, such as zero-day attacks. Furthermore, it simplifies the task for hackers who are able to tweak known strings or expression patterns to gain privileged access to a web application’s data or components.</p>
                <h2 id="what-are-the-benefits-of-a-scoring-based-waf">What Are the Benefits of a Scoring-Based WAF?</h2>
                <p>A scoring-based WAF utilizes positive security procedures that by default block any requests going beyond a set limit. This allows for the tackling of emerging and zero-day threats before an attack signature is even identified and logged. Performance-wise, scoring use significantly reduces resource consumption, noticeably lessening the latency problems frequently seen in conventional WAFs.</p>
                <p>Unlike the signature-based approach, a modern WAF aligns with advanced cybersecurity tactics as its functioning plays a complementary, or even a critical, role in providing a defense robust enough to counter challenges posed by zero-day attacks. In other words, should a vulnerability be uncovered this instant, the mechanisms that would exploit it can be rapidly identified by the scoring algorithm. Depending on the configuration settings, the system will then automatically initiate a block.</p>
                <p>In conclusion, scoring-based WAFs not only improve efficiency and performance but also alleviate the need for frequent manual updates of security policies. This reduction results in cost savings for the DevSecOps team, allowing them to focus more on critical tasks like cyber threat intelligence, investigations, and critical security analyses. To further illustrate this point, we’ve prepared a <a href="https://www.azion.com/en/blog/recent-waf-bypass-attack-does-not-affect-azion-web-application-firewall/"><u>post</u></a> explaining an instance where a WAF bypass evaded multiple solutions from global providers, but failed to bypass Azion’s WAF.</p>
             </ReadableContent>`
})

export const Default = Template.bind({});
