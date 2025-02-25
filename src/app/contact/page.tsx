import Contact from "@/app/contact/(section)/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { contacttype } from "@/types/about-contact.type";

const page = ({ }) => {
    const contactdata: contacttype = {
        socialmedias: {
            instagram: "https://www.instagram.com/lararestaurant/?hl=en",
            facebook: "",
            tiktok: "",
            google: "https://in.search.yahoo.com/search;_ylt=AwrKC1mGI0Bn_AEAUka7HAx.;_ylc=X1MDMjExNDcyMzAwMwRfcgMyBGZyA21jYWZlZV9lLTI2ODYwXzNQQy12BGZyMgNzYi10b3AEZ3ByaWQDUXo0Q2NFOTJSZ1dsQjVQS0IxRTZGQQRuX3JzbHQDMARuX3N1Z2cDMwRvcmlnaW4DaW4uc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMTgEcXVlcnkDbGFyYSUyMHJlc3RhdXJlbnQlMjB1awR0X3N0bXADMTczMjI1NjY3Mw--?p=lara+restaurent+uk&fr=mcafee_e-26860_3PC-v&type=F210IN714G91841MNhJ%2BFSIbRCCvKdyV%2F2R5GgXXfvl%2BaCFyile5iUQkkoM%3D&fr2=sb-top",
            traveladvisor: "",
        },
        openstatus: {
            sun: "12:00 - 23:45",
            mon: "16:00 - 23:00",
            tue: "16:00 - 23:00",
            wed: "16:00 - 23:00",
            thur: "16:00 - 23:00",
            fri: "12:00 - 23:45",
            sat: "12:00 - 23:45",
        },
        location: "3 Bradgate Rd, Anstey, Leicester LE7 7AB, United Kingdom",
        locationurl: "https://www.google.com/maps/place/Lara+Restaurant/@52.6724513,-1.1875297,50m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4877607586b3901f:0x3e2cc8c299288365!8m2!3d52.6724513!4d-1.1875297!16s%2Fg%2F11gdspsyg0?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
        phone: "0116 235 2888",
        email: "lararestaurant2024@outlook.com",
        iframeurl: "",
        bgimg: "/images/contact/contact.png",
    }
    return (
        <main className="relative flex h-full w-full">
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
                <Navbar position="absolute" />
                <div className="h-[10vh]" id="hero"></div>
                <Contact contactdata={contactdata} />
                <Footer />
            </div>
        </main>
    );
};

export default page;
