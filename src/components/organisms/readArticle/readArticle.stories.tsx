import React from "react";

import ReadArticle from "./ReadArticle";
import britishCat from "../../../images/british-haircat.jpg";

export const ReadArticleExample = () => (
  <ReadArticle
    title="Why do cats have Whiskers?"
    imageSrc={britishCat}
    author="Elizabeth whatever"
    createdAt="12.04.2019"
    content={content}
  />
);

export default {
  title: "Organisms/Read Article",
  component: ReadArticle,
};

const content = `Men might grow a beard or maintain a mustache just for extra style points, but the facial hair of the cat has nothing to do with fashion. A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a catsee in the dark and steer clear of hungry predators. 

Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs. At the root of each of these long, stiff hairs is a follicle loaded with nerves. 

By brushing its whiskers against an object, a cat can detect the precise location, size and texture of the object, even in the dark. their surroundings, but can also provide humans with some insight into their pet's state of mind.

For example, a set of taut whiskers, pulled back across the face, is a good indication that Kitty feels threatened, while relaxed whiskers, pointing away from the face, indicate a content cat. Of course, cats aren't the only mammals with whiskers.

Most mammalian species, including primates, are equipped with these extrasensory receptors. Biologists think mammals developed whiskers because they needed help sensing their environments at night. The first small mammals shared the world with dinosaurs and had to adapt to hunting nocturnally, when their predators were less active.

Whiskers helped these hungry animals find food and navigate dark terrain.
This evolutionary adaptation also helps to explain why the whiskers of many nocturnal or aquatic carnivores — like rats, seals and walruses — are so prominent.
`;
