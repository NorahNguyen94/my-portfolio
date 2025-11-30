export default function Heading({ title }) {
    return (
        <h1 className="font-semibold mb-6 text-blue-400 flex items-baseline gap-3">
            { title }
            <span className="inline-block w-3 h-3 bg-teal-400 rounded-sm"></span>
        </h1>
    );
}