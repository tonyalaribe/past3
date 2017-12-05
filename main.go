package main

import (
	"log"
	"net/http"
	"os"

	"github.com/julienschmidt/httprouter"
)

func main() {
	router := httprouter.New()
	fileServer := http.FileServer(http.Dir("./public"))
	router.GET("/*filepath", func(httpRes http.ResponseWriter, httpReq *http.Request, httpParams httprouter.Params) {
		// w.Header().Set("Vary", "Accept-Encoding")
		// w.Header().Set("Cache-Control", "public, max-age=7776000")
		httpReq.URL.Path = httpParams.ByName("filepath")
		fileServer.ServeHTTP(httpRes, httpReq)
	})

	PORT := os.Getenv("PORT")
	if PORT == "" {
		log.Println("No Global port has been defined, using default")
		PORT = "8080"
	}
	log.Println(PORT)
	log.Println("Serving")
	log.Fatal(http.ListenAndServe(":"+PORT, router))
}
