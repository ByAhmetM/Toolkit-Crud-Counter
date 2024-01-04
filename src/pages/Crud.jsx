import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { useState } from "react";
import { removeTask } from "../redux/slices/crudSlice";

const Crud = () => {
  const state = useSelector((store) => store.crud.tasks);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  return (
    <div className="px-3 my-5  ">
      <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>

      <FormModal
        editItem={editItem}
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
      />

      {/* tablo */}
      <Table className="mt-5 " variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.map((task, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    size="sm"
                    onClick={() => dispatch(removeTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                    size="sm"
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Crud;
