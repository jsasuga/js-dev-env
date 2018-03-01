export default function getBaseUrl() {
    const inDevelopment = process.env.NODE_ENV !== "production";
    return inDevelopment ? "http://localhost:3001/" : "/";
}
