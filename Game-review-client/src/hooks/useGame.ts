import React, { useEffect, useState } from "react";
import apiClient from "../services/api-service";
import { CanceledError } from "axios";

interface Games {
    id: number;
    name: string;
}

interface ArrayofGames {
    count: number;
    results: Games[];
}

const useGames = () => {
    const [GameArray, setGameArray] = useState<Games[]>([]);
    const [error, seterror] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<ArrayofGames>("/games", { signal: controller.signal })
            .then((res) => {
                setGameArray(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return null;
                seterror(err.message);
            });

        return () => controller.abort();
    }, []);

    return { GameArray, error };

}

export default useGames;