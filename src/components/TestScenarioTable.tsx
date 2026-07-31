import { workflowTestScenarios } from "@/data/studio";

export function TestScenarioTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-fc-line-2 bg-white">
      <table className="w-full text-left text-[13.5px]">
        <thead>
          <tr className="border-b border-fc-line-2 bg-fc-blue-bg text-fc-blue-dark">
            <th className="px-4 py-3 font-bold">테스트 질문</th>
            <th className="px-4 py-3 font-bold">예상 분류</th>
            <th className="px-4 py-3 font-bold">도착 노드</th>
          </tr>
        </thead>
        <tbody>
          {workflowTestScenarios.map((s, i) => (
            <tr key={s.question} className={i !== workflowTestScenarios.length - 1 ? "border-b border-fc-line-2" : ""}>
              <td className="px-4 py-3 text-fc-ink-3">{s.question}</td>
              <td className="px-4 py-3 text-fc-gray-2">{s.expectedCategory}</td>
              <td className="px-4 py-3 font-medium text-fc-blue-dark">{s.expectedNode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
