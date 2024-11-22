import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; // Importa o middleware Multer para gerenciar uploads de arquivos
import cors from "cors";

import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsControll.js"; // Importa as funções controladoras para lidar com rotas relacionadas a posts

const corsOptions = {
  origin: "http://localhost:8000",
  optionSuccessStatus: 200
}

// Configuração de armazenamento para Windows (ajuste o caminho se necessário)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Caminho para salvar os arquivos carregados (crie a pasta uploads se não existir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Mantém o nome original do arquivo
  }
});

const upload = multer({ storage }); // Cria uma instância do middleware Multer usando a configuração de armazenamento

const routes = (app) => {
  app.use(express.json()); // Habilita o parser JSON para processar dados enviados no formato JSON
  app.use(cors(corsOptions))
  // Rota para buscar todos os posts (implementada na função listarPosts)
  app.get("/posts", listarPosts);

  // Rota para criar novos posts (implementada na função postarNovoPost)
  app.post("/posts", postarNovoPost);

  // Rota para upload de imagens (usa o middleware upload.single("imagem"))
  app.post("/upload", upload.single("imagem"), uploadImagem); // A função uploadImagem lida com o upload e processamento da imagem

  // Rota para atualizar
  app.put("/upload/:id", atualizarNovoPost)
};

export default routes;