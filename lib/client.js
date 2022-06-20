import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "24o5i1dc",
  dataset: "production",
  apiVersion: "2022-04-23",
  useCdn: true,
  token:
    "skpvgf1Hn9xYScmlNFHOU1GaO51QrgFujmhvhPf7ZnJic9iJoBmdcja5lhREZuKIHTsm4MlpP6qWoZXNPWUS6XqeLxrFCsQPeQsbNitpFZ2pqV9h2Pw2uVPNy9nbEekRM92pNPOUMERuIzQRXBhfmbROG4TJbO25OJQl8tLu9bC3ltfKZcLp",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
