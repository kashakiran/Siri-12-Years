alert("JavaScript is connected!");

/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    const currentPage = document.querySelector(".page.active");
    const nextPage = document.getElementById(pageId);

    if (!nextPage || currentPage === nextPage) {
        return;
    }

    currentPage.classList.remove("active");

    setTimeout(() => {
        nextPage.classList.add("active");
    }, 250);
}


/* =========================================
   12 REASONS
========================================= */

const reasons = [

    {
        number: "01",

        title: "You were the first girl who cared about me. ❤️",

        text: `
            <p>
                You were the first girl who genuinely cared about me,
                and I don't think I've ever forgotten what that felt like.
            </p>
        `
    },


    {
        number: "02",

        title: "Your straightforward way of talking. 😌",

        text: `
            <p>
                I love the way you talk to me.
            </p>

            <p>
                You never sugarcoat things or pretend just to make me feel good.
                If I'm wrong, you'll tell me I'm wrong. 😂
            </p>

            <p>
                And honestly, I respect that about you so much.
                I know that whenever you talk to me,
                you're going to give me the real answer.
            </p>
        `
    },


    {
        number: "03",

        title: "You changed the way I see things. ❤️",

        text: `
            <p>
                You are one of the reasons I learned to respect women
                and understand things from a different perspective.
            </p>

            <p>
                Knowing you for all these years taught me a lot
                without you even realizing it.
            </p>

            <p>
                And that's something I'll always be grateful for.
            </p>
        `
    },


    {
        number: "04",

        title: "You were the first girl who gifted me on my birthday. 🎁❤️",

        text: `
            <p>
                You were the first girl who actually gave me
                a birthday gift.
            </p>

            <p>
                It might seem like a small thing,
                but I still remember it.
            </p>

            <p>
                Maybe that's why little things from you
                have always meant a lot to me.
            </p>
        `
    },


    {
        number: "05",

        title: "You made me feel special. ❤️",

        text: `
            <p>
                You treated me like I was actually special to you.
            </p>

            <p>
                And honestly…
                I liked that. A lot. 😌
            </p>

            <p>
                There was always something about the way
                you treated me that made me feel important.
            </p>
        `
    },


    {
        number: "06",

        title: "Your support. 🤍",

        text: `
            <p>
                You've supported me through so many things.
            </p>

            <p>
                Even when I didn't know what I was doing,
                somehow you were still there.
            </p>

            <p>
                Sometimes you encouraged me,
                sometimes you gave me reality checks…
                but you were there.
            </p>

            <p>
                And that support means more to me than I probably say.
            </p>
        `
    },


    {
        number: "07",

        title: "I trusted you to never leave me. ❤️",

        text: `
            <p>
                There has always been a part of me
                that trusted you completely.
            </p>

            <p>
                I believed that no matter what happened,
                you wouldn't just disappear from my life.
            </p>

            <p>
                Twelve years later…
                I guess that trust wasn't completely wrong. 😂❤️
            </p>
        `
    },


    {
        number: "08",

        title: "I can literally talk to you about anything. 😏",

        text: `
            <p>
                You are the <strong>only person</strong>
                I can talk to about literally anything.
            </p>

            <p>
                The good things.<br>
                The bad things.<br>
                The embarrassing things.<br>
                And yes… even the <strong>naughty things.</strong> 😏
            </p>

            <p>
                With you, I never feel like I have to hide anything
                or think twice before saying something.
            </p>
        `
    },


    {
        number: "09",

        title: "You trust me more than I trust myself. 😂❤️",

        text: `
            <p>
                Somehow, you trust me more than I trust myself.
            </p>

            <p>
                There have been so many times when you've believed
                in me even when I was doubting myself.
            </p>

            <p>
                And honestly…
                having someone who believes in you like that
                is something really special.
            </p>
        `
    },


    {
        number: "10",

        title: "You're beautiful. Don't argue with me. 😌❤️",

        text: `
            <p>
                Do I even need to explain this one? 😂
            </p>

            <p>
                I've told you so many times that you're beautiful,
                and I'm pretty sure I'm never going to get tired
                of saying it. ❤️
            </p>

            <p>
                So yeah, you're beautiful.
                That's it.
                Don't argue with me. 😌
            </p>
        `
    },


    {
        number: "11",

        title: "Okay… this one is a little different. 😏",

        text: `
            <p>
                I can't lie about this one.
            </p>

            <p>
                I love your lips, your pretty face,
                and that cute smile of yours.
            </p>

            <p>
                And those <strong>sexy lips</strong>…
                yeah, I'm definitely not going to pretend
                I haven't noticed them. 😏
            </p>

            <p>
                There are probably a few more things I could say here…
            </p>

            <p>
                But let's leave the rest behind these three little stars:
            </p>

            <p>
                <strong>***</strong> 🤫
            </p>

            <p>
                So yeah…
                maybe that's another reason I've stayed around
                all these years. 😂❤️
            </p>
        `
    },


    {
        number: "12",

        title: "ME. 😌",

        text: `
            <p>
                And finally…
            </p>

            <p>
                The <strong>main reason</strong>
                we've been together for all these years.
            </p>

            <p>
                Not the memories.<br>
                Not the distance.<br>
                Not the conversations.<br>
                Not even the fact that you're special.
            </p>

            <p>
                It's much simpler than that.
            </p>

            <p>
                <strong>ME. 😌</strong>
            </p>

            <p>
                Obviously.
            </p>

            <p>
                Who else is going to tolerate you for another 12 years?
            </p>

            <p>
                You're welcome. 😂🐼❤️
            </p>
        `
    }

];


/* =========================================
   CURRENT REASON
========================================= */

let currentReason = 0;


/* =========================================
   SHOW A REASON
========================================= */

function showReason(index) {

    /* Safety check */

    if (index < 0 || index >= reasons.length) {
        return;
    }

    currentReason = index;

    const reasonPage = document.getElementById("page-reason");

    const envelope = document.getElementById("envelope");

    const letter = document.getElementById("reason-letter");

    const number = document.getElementById("reason-number");

    const label = document.getElementById("reason-label");

    const title = document.getElementById("reason-title");

    const text = document.getElementById("reason-text");

    const button = document.getElementById("reason-button");


    /* Reset everything */

    envelope.classList.remove("open");

    letter.classList.remove("show");


    /* Put the reason content into the page */

    number.textContent = reasons[index].number;

    label.textContent =
        "REASON #" + (index + 1);

    title.innerHTML =
        reasons[index].title;

    text.innerHTML =
        reasons[index].text;


    /* Change button for final reason */

    if (index === reasons.length - 1) {

        button.textContent =
            "One last thing… 👀";

    } else {

        button.textContent =
            "Next reason ❤️";

    }


    /* Show reason page */

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    reasonPage.classList.add("active");


    /*
        Start envelope animation
        after the page appears
    */

    setTimeout(() => {

        envelope.classList.add("open");

    }, 500);


    /*
        Bring out the letter
        after the envelope opens
    */

    setTimeout(() => {

        letter.classList.add("show");

    }, 1300);

}


/* =========================================
   NEXT REASON
========================================= */

function nextReason() {

    /*
        If this is reason 12,
        go to the secret page.
    */

    if (currentReason === reasons.length - 1) {

        showPage("page-secret");

        return;
    }


    /*
        Hide the current reason
        before showing the next envelope.
    */

    const letter =
        document.getElementById("reason-letter");

    const envelope =
        document.getElementById("envelope");


    letter.classList.remove("show");

    envelope.classList.remove("open");


    /*
        Wait for the current animation
        before loading the next reason.
    */

    setTimeout(() => {

        showReason(currentReason + 1);

    }, 500);

}

function showSecret() {

    const secret =
        document.getElementById("secret-message");

    if (!secret) {
        console.log("Secret message element not found!");
        return;
    }

    secret.classList.remove("hidden");

}
/* =========================================
   OUR MEMORIES SLIDESHOW
========================================= */

const memories = [
    {
        image: "images/photo1.jpg.jpeg",
        caption: "A memory I'll always keep. ❤️"
    },

    {
        image: "images/photo2.jpg",
        caption: "12 years of memories... and we're still here. 😂❤️"
    },

    {
        image: "images/photo3.jpg",
        caption: "Another little piece of our story. ❤️"
    },

    {
        image: "images/photo4.jpg",
        caption: "Look at us... we really survived all these years. 😂"
    },

    {
        image: "images/photo5.jpg",
        caption: "One more memory worth keeping. ❤️"
    },

    {
        image: "images/photo6.jpg",
        caption: "Some moments just stay with you. ❤️"
    },

    {
        image: "images/photo7.jpg",
        caption: "Another chapter of our crazy friendship. 😂"
    },

    {
        image: "images/photo8.jpg",
        caption: "Still collecting memories together. ❤️"
    },

    {
        image: "images/photo9.jpg",
        caption: "12 years later... still us. 😌❤️"
    },

    {
        image: "images/photo10.jpg",
        caption: "This one definitely deserves a place here. ❤️"
    },

    {
        image: "images/photo11.jpg",
        caption: "Proof that we've had some really good times. 😂"
    },

    {
        image: "images/photo12.jpg",
        caption: "Another memory I wouldn't trade for anything. ❤️"
    },

    {
        image: "images/photo13.jpg",
        caption: "And somehow, there are still more memories to make. ❤️"
    },

    {
        image: "images/photo14.jpg",
        caption: "Okay... enough memories. Now let's get to the reasons. 😏❤️"
    }
];

let currentMemory = 0;


function nextMemory() {

    currentMemory++;

    if (currentMemory >= memories.length) {

        showPage("page-reasons-intro");

        currentMemory = 0;

        return;
    }

    const image =
        document.getElementById("memory-image");

    const caption =
        document.getElementById("memory-caption");

    const counter =
        document.getElementById("memory-counter");


    image.style.opacity = "0";


    setTimeout(() => {

        image.src =
            memories[currentMemory].image;

        caption.textContent =
            memories[currentMemory].caption;

        counter.textContent =
            `${currentMemory + 1} / ${memories.length}`;

        image.style.opacity = "1";

    }, 300);
}