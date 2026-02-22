import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

function CostCalculatorPage() {
  const [totalCost, setTotalCost] = useState(0);
  const [ratio, setRatio] = useState(0.4);
  const [members, setMembers] = useState([{ name: "", pages: 0 }]);

  const addMember = () => {
    setMembers([...members, { name: "", pages: 0 }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const totalPages = members.reduce(
    (sum, member) => sum + Number(member.pages),
    0
  );

  const removeMember = (index) => {
  const updated = members.filter((_, i) => i !== index);
  setMembers(updated);
};

  const n = members.length;

  const F = (totalCost * ratio) / n;
  const u = totalPages > 0 ? (totalCost * (1 - ratio)) / totalPages : 0;

  return (
    <div className="contain">
      <h1>合同誌 印刷代 精算計算機</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>総印刷費 (円)</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setTotalCost(Number(e.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>固定費比率 (0〜1)</Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            value={ratio}
            onChange={(e) => setRatio(Number(e.target.value))}
          />
        </Form.Group>
      </Form>

      <h3>参加者入力</h3>
      {members.map((member, index) => (
<div key={index} className="mb-3 p-3 border rounded">
    <Form.Control
      className="mb-2"
      placeholder="名前"
      onChange={(e) =>
        handleChange(index, "name", e.target.value)
      }
    />
    <Form.Control
      type="number"
      className="mb-2"
      placeholder="ページ数"
      onChange={(e) =>
        handleChange(index, "pages", e.target.value)
      }
    />

    {members.length > 1 && (
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeMember(index)}
      >
        削除
      </Button>
    )}
        </div>
      ))}

      <Button className="mb-4" onClick={addMember}>
        参加者を追加
      </Button>

      <h3>計算結果</h3>

      <p>1人あたり固定費 F = {F.toFixed(0)} 円</p>
      <p>1ページ単価 u = {u.toFixed(2)} 円</p>

      <Table striped bordered>
        <thead>
          <tr>
            <th>名前</th>
            <th>ページ数</th>
            <th>支払額</th>
            <th>実質1ページ単価</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => {
            const payment = F + u * member.pages;
            const unitPrice =
              member.pages > 0 ? payment / member.pages : 0;

            return (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.pages}</td>
                <td>{payment.toFixed(0)} 円</td>
                <td>{unitPrice.toFixed(2)} 円</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CostCalculatorPage;